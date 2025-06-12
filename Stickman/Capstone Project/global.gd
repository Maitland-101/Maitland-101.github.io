extends Node


var score = 0
var highscore = 0

func update_score(score):
	#updates the score
	$ScoreLabel.text = "Time survived " + str(score)
	if score > highscore:
		$HighScore.text = "high score " + str(score)
