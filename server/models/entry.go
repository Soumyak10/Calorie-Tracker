package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Entry struct {
	ID       primitive.ObjectID `bson:"id"`
	Dish     *string            `json:"dish"`
	Fats     *float64           `json:"fats"`
	Calories *float64           `json:"calories"`
	Carbs    *float64           `json:"carbs"`
	Proteins *float64           `json:"proteins"`
}
