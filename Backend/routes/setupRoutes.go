package routes

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/prabhpreet-code/go-owl/controllers"
)

func New() http.Handler {
  router := mux.NewRouter()

  router.HandleFunc("/", controllers.CheckUsers).Methods("GET")
  router.HandleFunc("/users", controllers.GetAllUsers).Methods("GET")
  router.HandleFunc("/user/{id}",controllers.GetUserById).Methods("GET")
  router.HandleFunc("/user", controllers.CreateUser).Methods("POST") 
  router.HandleFunc("/user/{id}", controllers.UpdateUser).Methods("PUT")
  router.HandleFunc("/user/{id}", controllers.DeleteUser).Methods("DELETE")
  
  
  return router
}