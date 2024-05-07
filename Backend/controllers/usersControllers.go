package controllers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
	"github.com/prabhpreet-code/go-owl/models"
	"github.com/prabhpreet-code/go-owl/utils"
)

var validate *validator.Validate

type UserInput struct {
  WalletAddress string `json:"walletAddress" validate:"required"`
  
}

type UserInputUpdate struct {
  Username string `json:username`
  WalletAddress string `json:walletAddress`
  Email string `json:email`
  Bio string `json:"bio"`
  Picture string `json:"picture`
  Tags []string `json:tags`
}

type UserWishlistUpdate struct {
  WishList []string `json:wishList`
}

type UserWishlistDelete struct {
  WishList string `json:wishList`
}

//
func CheckUsers(w http.ResponseWriter, r *http.Request){

  
  quest := "hello world"
  json.NewEncoder(w).Encode(quest) 
}


// func enableCor(w *http.ResponseWriter) {
// (*w).Header().Set("Access-Control-Allow-Origin", "*")
// }

func CreateUser(w http.ResponseWriter, r *http.Request){
  var input UserInput 

  body, _ := io.ReadAll(r.Body)
  _ = json.Unmarshal(body, &input)

  

  validate = validator.New()
  err := validate.Struct(input)

  if err != nil {
    utils.RespondWithError(w, http.StatusBadRequest, "Validation Error")
    return 
  }

  quest, err := models.NewUser(input.WalletAddress)

  

  w.Header().Set("Content-Type", "application/json")
 

  json.NewEncoder(w).Encode(quest) 

}


func GetAllUsers(w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json")

  var users []models.User
  models.DB.Find(&users)


  json.NewEncoder(w).Encode(users)
}


func GetUserById(w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json")

  id := mux.Vars(r)["id"]
  token := r.URL.Query().Get("token")
  var user models.User

  if err := models.DB.Where("id = ?", id).First(&user).Error; 
  
  err != nil{
    utils.RespondWithError(w, http.StatusNotFound, "User not found")
    return
  }


  var finalArray []map[string]interface{}

  for _, v := range user.WishList {
    
  
    idWishlist, _ := strconv.ParseInt(v, 10, 64)
    
  
    query := []byte(`fields id, release_dates.date, similar_games, dlcs, franchise, platforms, language_supports.id, franchises, parent_game, genres.name, videos, involved_companies.id, name, summary, rating, storyline, cover.url, screenshots.url; where id=` + strconv.FormatInt(idWishlist, 10) + `;`)
  
  
  
    url := "https://api.igdb.com/v4/games/"
    req, err := http.NewRequest("POST", url, bytes.NewBuffer(query))

    if err != nil {
      http.Error(w, err.Error(), http.StatusInternalServerError)
      return
    }
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Client-ID", "5rqroe548z244rtq0z3yivankoxq7j")
    req.Header.Set("Authorization", "Bearer "+token)
    req.Header.Set("Access-Control-Allow-Origin", "http://localhost:8080")
  
    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
      http.Error(w, err.Error(), http.StatusInternalServerError)
      return
    }
    defer resp.Body.Close()
  
    
  
    body, err := io.ReadAll(resp.Body)

    if err != nil {
      http.Error(w, err.Error(), http.StatusInternalServerError)
      return
    }

  
    var prettyJSON bytes.Buffer
	 json.Indent(&prettyJSON, body, "", "    ")

	

  var jsonArray []interface{}

	
	json.Unmarshal([]byte(prettyJSON.String()), &jsonArray)
	
	
	for _, obj := range jsonArray {
		jsonObj, err := json.MarshalIndent(obj, "", "  ")
		if err != nil {
			fmt.Println("Error:", err)
			return
		}

    var jsonObject map[string]interface{}

	
	 json.Unmarshal([]byte(string(jsonObj)), &jsonObject)



  finalArray = append(finalArray, jsonObject)
	}
  
  
}

json.NewEncoder(w).Encode(finalArray)

}


func DeleteUser(w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json")

  id := mux.Vars(r)["id"]
  var user models.User

  if err := models.DB.Where("id = ?", id).First(&user).Error; err != nil{
    utils.RespondWithError(w, http.StatusNotFound, "User not found")
    return
  }

  models.DB.Delete(&user)

  w.WriteHeader(http.StatusNoContent)
  json.NewEncoder(w).Encode(user)
}


func UpdateUser(w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json")

  id := mux.Vars(r)["id"]
  var user models.User

  if err := models.DB.Where("id = ?", id).First(&user).Error; err != nil{
    utils.RespondWithError(w, http.StatusNotFound, "User not found")
    return
  }

  var inputUpdate UserInputUpdate 

  body, _ := io.ReadAll(r.Body)
  _ = json.Unmarshal(body, &inputUpdate)

  validate = validator.New()
  err := validate.Struct(inputUpdate)

  if err != nil {
    utils.RespondWithError(w, http.StatusBadRequest, "Validation Error")
    return 
  }
  user.Username=inputUpdate.Username
  user.Email=inputUpdate.Email
  user.Bio = inputUpdate.Bio
  user.Picture=inputUpdate.Picture
  user.Tags=inputUpdate.Tags
  user.WalletAddress = inputUpdate.WalletAddress

  models.DB.Save(&user)

  json.NewEncoder(w).Encode(user)
}

func UpdateWishList(w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json")

  id := mux.Vars(r)["id"]
  var user models.User

  if err := models.DB.Where("id = ?", id).First(&user).Error; err != nil{
    utils.RespondWithError(w, http.StatusNotFound, "User not found")
    return
  }

  var inputWishlistUpdate UserWishlistUpdate 

  body, _ := io.ReadAll(r.Body)
  _ = json.Unmarshal(body, &inputWishlistUpdate)

  validate = validator.New()
  err := validate.Struct(inputWishlistUpdate)


  if err != nil {
    utils.RespondWithError(w, http.StatusBadRequest, "Validation Error")
    return 
  }

  user.WishList = append(user.WishList, inputWishlistUpdate.WishList...)

  models.DB.Save(&user)

  json.NewEncoder(w).Encode(user)
}

func DeleteWishList(w http.ResponseWriter, r *http.Request){
  w.Header().Set("Content-Type", "application/json")

  id := mux.Vars(r)["id"]
  var user models.User

  if err := models.DB.Where("id = ?", id).First(&user).Error; err != nil{
    utils.RespondWithError(w, http.StatusNotFound, "User not found")
    return
  }

  var inputWishlistDelete UserWishlistDelete 

  body, _ := io.ReadAll(r.Body)
  _ = json.Unmarshal(body, &inputWishlistDelete)

  validate = validator.New()
  err := validate.Struct(inputWishlistDelete)


  if err != nil {
    utils.RespondWithError(w, http.StatusBadRequest, "Validation Error")
    return 
  }

  

  index := -1
  for i, v := range user.WishList {
      if v == inputWishlistDelete.WishList {
       
          index = i
          break
      }
  }

  
  if index != -1 {
     
      user.WishList = append(user.WishList[:index], user.WishList[index+1:]...)
   
  }

  
 

  models.DB.Save(&user)

  json.NewEncoder(w).Encode(user)
}

