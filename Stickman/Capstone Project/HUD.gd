extends CanvasLayer
signal start_game
var highscore: float = 0


func _ready():
	pass


func _process(_delta):
	pass


func show_message(text):
	#displays game title
	$Message.text = text
	$Message.show()
	$MessageTimer.start()


func show_game_over():
	#when player is hit display game over screen
	show_message('game over')
	await $MessageTimer.timeout

	$Message.text = 'dodge the projectiles'
	$Message.show()

	await get_tree().create_timer(1.0).timeout
	$StartButton.show()


func update_score(score):
	#updates the score
	$ScoreLabel.text = "Time survived " + str(score)
	if score > highscore:
		$HighScore.text = "high score " + str(score)


func _on_start_button_pressed():
	#sends signal to start game and hide start button
	$StartButton.hide()
	start_game.emit()


func _on_message_timer_timeout():
	#when set time is over hide message
	$Message.hide()
