extends CharacterBody2D
signal hit



@export var speed: float = 300.0
@export var jump_velocity: float = -400.0
var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")



func _ready():
	pass


func _physics_process(delta):
	if not is_on_floor():
		# Add the gravity.
		velocity.y += gravity * delta

	if Input.is_action_just_pressed("up") and is_on_floor():
		# Handle jump.
		velocity.y = jump_velocity

	var direction = Input.get_axis("left", "right") # Get the input direction and handle the movement/deceleration.
	if direction:
		#when the player is moving horizontally play run animation
		velocity.x = direction * speed
		$PlayerSprite.play("Run")
	else:
		#if the player is stoped play idle animation
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


func start(pos):
	# when game is started again reset player
	position = pos
	show()
	$CollisionPolygon2D.disabled = false
