extends Area2D
signal hit

@export var speed = 200
var screen_size

# Called when the node enters the scene tree for the first time.
func _ready():
	screen_size = get_viewport_rect().size


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
	position = position.clamp(Vector2.ZERO, screen_size)
	
	if velocity.x != 0:
		#if the player is moving left flip animation
		$PlayerSprite.animation = "Run"
		$PlayerSprite.flip_v = false
		$PlayerSprite.flip_h = velocity.x < 0

func _on_body_entered(body):
	#called when hit is siganled hides player and diable collision
	hide()
	hit.emit()
	$CollisionPolygon2D.set_deferred("disabled", true)

func start(pos):
	# when game is started again reset player
	position = pos
	show()
	$CollisionPolygon2D.disabled = false
