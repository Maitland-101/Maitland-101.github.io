extends Area2D

@export var speed = 200

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	var velocity = Vector2.ZERO
	if Input.is_action_pressed("right"):
		#when up right_arrow or d is pressed move right
		velocity.x += 1
	if Input.is_action_pressed("left"):
		#when up left_arrow or a is pressed move left
		velocity.x -= 1
	if Input.is_action_pressed("up"):
		#when up up_arrow or w is pressed move up
		velocity.y -= 1
	
	if velocity.length() > 0:
		#if the player moves on a diagonal velocity is still equal to 1 and run movement animation
		velocity = velocity.normalized() * speed
		$PlayerSprite.play("Run")
	else:
		$PlayerSprite.play("Idle")
	position += velocity * delta
	#position = position.clamp(Vector2.ZERO)
