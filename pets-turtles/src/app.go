package main

import (
	"github.com/gin-gonic/gin"
	"os"
)



func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		hostname, err := os.Hostname()
		if err != nil {
			c.String(200, "Turtles @Error (Golang)")
		} else {
			c.String(200, "Turtles @" + hostname + " (Golang)")
		}

	})
	r.Run(":80")
}