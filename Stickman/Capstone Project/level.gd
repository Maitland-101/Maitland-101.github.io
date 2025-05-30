extends Node



@export var projectile_scene: PackedScene
var score



func _ready():
	pass


func _process(_delta):
	pass


func game_over():
	#stop timers when player is hit
	$ScoreTimer.stop()
	$ProjectileTimer.stop()
	
	$HUD.show_game_over()


func new_game():
	#when a new game is started set player back to spawn and start the timers
	score = 0
	$Player.start($StartPosition.position)
	$StartTimer.start()
	
	$HUD.update_score(score)
	$HUD.show_message("get ready")
	
	get_tree().call_group("projectiles", "queue_free()")


func _on_projectile_timer_timeout():
	#creates projectiles every 0.5 seconds until player is hit
	var projectile = projectile_scene.instantiate()
	#random spawn location
	var projectile_spawn_location = $ProjectilePath/ProjectileSpawnLocation
	projectile_spawn_location.progress_ratio = randf()
	projectile.position = projectile_spawn_location.position
	#set direction
	var direction = projectile_spawn_location.rotation + PI / 2
	projectile.rotation = direction
	#speed
	var velocity = Vector2(250, 0.0)
	projectile.linear_velocity = velocity.rotated(direction)
	#add projectile
	add_child(projectile)


func _on_score_timer_timeout():
	#add point to score for every second survived
	score += 1
	
	$HUD.update_score(score)


func _on_start_timer_timeout():
	#when game is started start other timers
	$ProjectileTimer.start()
	$ScoreTimer.start()
