package controllers

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

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
  Email string `json:email`
  Bio string `json:"bio" validate:"required"`
  Picture string `json:"picture`
  Tags []string `json:tags`
  WishList []string `json:"wishList" "`
  GamesOwned []string `json:"gamesOwned" "`
  
}

//
func CheckUsers(w http.ResponseWriter, r *http.Request){

  fmt.Println("sukhuuuuuuu")
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

  fmt.Println(input,"CreateUser");

  validate = validator.New()
  err := validate.Struct(input)

  if err != nil {
    utils.RespondWithError(w, http.StatusBadRequest, "Validation Error")
    return 
  }

  quest, err := models.NewUser(input.WalletAddress)

  fmt.Println(input.WalletAddress)

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
  var user models.User

  if err := models.DB.Where("id = ?", id).First(&user).Error; 
  
  err != nil{
    utils.RespondWithError(w, http.StatusNotFound, "User not found")
    return
  }


  
  //experiment
  // models.DB.Raw("SELECT id,walletAddress FROM users WHERE id = ?", id).Scan(&user)

  // var input models.User
  // _ = json.Unmarshal(user, &input)

  json.NewEncoder(w).Encode(user)
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

  var input UserInputUpdate 

  body, _ := io.ReadAll(r.Body)
  _ = json.Unmarshal(body, &input)

  validate = validator.New()
  err := validate.Struct(input)

  if err != nil {
    utils.RespondWithError(w, http.StatusBadRequest, "Validation Error")
    return 
  }
  user.Username=input.Username
  user.Email=input.Email
  user.Bio = input.Bio
  user.Picture=input.Picture
  user.Tags=input.Tags
  user.WishList = input.WishList
  user.GamesOwned = input.GamesOwned

  models.DB.Save(&user)

  json.NewEncoder(w).Encode(user)
}