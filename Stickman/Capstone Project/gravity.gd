extends CharacterBody2D
signal hit

@export var speed: float = 300.0
@export var jump_velocity: float = -400.0
var screen_size

# Get the gravity from the project settings to be synced with RigidBody nodes.
var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")

# Called when the node enters the scene tree for the first time.
func _ready():
	screen_size = get_viewport_rect().size

func _physics_process(delta):
	# Add the gravity.
	if not is_on_floor():
		velocity.y += gravity * delta

	# Handle jump.
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = jump_velocity

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var direction = Input.get_axis("ui_left", "ui_right")
	if direction:
		velocity.x = direction * speed
		$PlayerSprite.play("Run")
	else:
		velocity.x = move_toward(velocity.x, 0, speed)
		$PlayerSprite.play("Idle")
		
	if velocity.x != 0:
		#if the player is moving left flip animation
		$PlayerSprite.animation = "Run"
		$PlayerSprite.flip_v = false
		$PlayerSprite.flip_h = velocity.x < 0

	move_and_slide()
	
	for i in get_slide_collision_count():
		#check to see if in contact with a force that makes the player slide
		var collision = get_slide_collision(i)
		if collision.get_collider() is RigidBody2D:
			#if the force is a rigidBody2D game over
			hide()
			hit.emit()
			$CollisionPolygon2D.set_deferred("disabled", true)
		



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
	position += velocity * delta
	position = position.clamp(Vector2.ZERO, screen_size)
	

func start(pos):
	# when game is started again reset player
	position = pos
	show()
	$CollisionPolygon2D.disabled = false
	
