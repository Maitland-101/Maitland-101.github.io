extends Area2D


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass


func _on_body_entered(body):
	if body.is_in_group("Player"):
		var current_level = get_tree().current_scene.scene_file_path
		print(current_level)
		var next_level_num = current_level.to_int() + 1
		var next_level_path = "res://Levels/level" + str(next_level_num) + ".tcsn"
		get_tree().change_scene_to_file(next_level_path)
