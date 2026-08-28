export type Cards = {
  id: string
  name: string
  slug: string
  description: string
  steps: string
  muscles: string[]
  muscles2: string[]
  imageSrc: string
  imageAlt: string
}

export const cards: Cards[] = [
  {
    id: 'card-1',
    name: 'Deadlift',
    slug: 'deadlift',
    description:
      'Builds total-body strength through a hip-hinge pattern, targeting the glutes, hamstrings, and lower back while reinforcing safe lifting mechanics.',
    muscles: ['Glutes', 'Lower Back'],
    muscles2: ['Abs', 'Calves', 'Hamstrings', 'Quadriceps'],
    imageSrc: '/images/cards/3.png',
    imageAlt: 'Woman performing a deadlift with an AguaForce water weight',
    steps: `### How to perform

- Stand with feet hip-width apart, an AguaForce weight on the floor between your feet
- Hinge at the hips and bend your knees to grip the handle, keeping your back flat and chest up
- Drive through your heels to stand up tall, squeezing your glutes at the top
- Lower the weight back to the floor with control by pushing your hips back first

### Tips

- Keep the weight close to your shins throughout the movement
- Brace your core before you lift to protect your lower back`,
  },
  {
    id: 'card-2',
    name: 'Romanian Deadlift',
    slug: 'romanian-deadlift',
    description:
      'Targets the hamstrings and glutes through a controlled hip hinge, improving posterior chain strength and flexibility.',
    muscles: ['Hamstrings'],
    muscles2: ['Abs', 'Calves', 'Glutes', 'Lower Back'],
    imageSrc: '/images/cards/4.png',
    imageAlt: 'Woman performing a Romanian deadlift with an AguaForce water weight',
    steps: `### How to perform

- Stand tall holding an AguaForce weight with both hands in front of your thighs
- With a slight bend in your knees, push your hips back and lower the weight along your legs
- Lower until you feel a stretch in your hamstrings, keeping your back flat
- Drive your hips forward to return to standing, squeezing your glutes at the top

### Tips

- Keep the weight close to your body throughout
- Avoid rounding your lower back as you hinge`,
  },
  {
    id: 'card-3',
    name: 'Straight Leg Deadlift',
    slug: 'straight-leg-deadlift',
    description:
      'Emphasizes hamstring flexibility and posterior chain strength with a near-straight-leg hip hinge.',
    muscles: ['Glutes', 'Lower Back', 'Hamstrings'],
    muscles2: ['Adductors', 'Trapezius', 'Forearm Flexors'],
    imageSrc: '/images/cards/5.png',
    imageAlt: 'Woman performing a straight leg deadlift with an AguaForce water weight',
    steps: `### How to perform

- Stand with feet hip-width apart holding an AguaForce weight in front of your thighs
- Keeping your legs nearly straight, hinge at the hips and lower the weight toward the floor
- Go as low as your hamstring flexibility allows while keeping your back flat
- Reverse the motion by driving your hips forward to return to standing

### Tips

- Keep a soft bend in the knees rather than locking them out
- Move slowly to maintain control and protect your lower back`,
  },
  {
    id: 'card-4',
    name: 'Single Leg Romanian Deadlift',
    slug: 'single-leg-romanian-deadlift',
    description:
      'Builds unilateral hamstring and glute strength while challenging balance and hip stability.',
    muscles: ['Hamstrings', 'Glutes'],
    muscles2: ['Abs', 'Calves', 'Lower Back'],
    imageSrc: '/images/cards/6.png',
    imageAlt: 'Woman performing a single leg Romanian deadlift with an AguaForce water weight',
    steps: `### How to perform

- Stand on one leg holding an AguaForce weight in the opposite hand
- Hinge forward at the hips, extending your free leg straight behind you for balance
- Lower the weight toward the floor until your torso is roughly parallel to the ground
- Squeeze your glutes and hamstrings to return to standing, then repeat on the other side

### Tips

- Keep your hips square to the floor throughout the movement
- Move slowly and use a wall or chair for balance if needed`,
  },
  {
    id: 'card-5',
    name: 'Swing',
    slug: 'swing',
    description:
      'Develops explosive hip power and cardiovascular conditioning by driving the weight up with an aggressive hip hinge.',
    muscles: ['Glutes', 'Quadriceps', 'Shoulders'],
    muscles2: ['Abs', 'Calves', 'Hamstrings', 'Lower Back'],
    imageSrc: '/images/cards/7.png',
    imageAlt: 'Woman performing a swing with an AguaForce water weight',
    steps: `### How to perform

- Stand with feet shoulder-width apart, holding an AguaForce weight with both hands
- Hinge at the hips and swing the weight back between your legs
- Drive your hips forward explosively to swing the weight up to shoulder height
- Let the weight swing back down naturally into the next rep

### Tips

- Power comes from your hips, not your arms or shoulders
- Keep your core braced and back flat throughout the swing`,
  },
  {
    id: 'card-6',
    name: 'Front Squat',
    slug: 'front-squat',
    description:
      'Strengthens the glutes and quadriceps while building core stability from holding the weight at the chest.',
    muscles: ['Glutes', 'Quadriceps'],
    muscles2: ['Abs', 'Calves', 'Hamstrings'],
    imageSrc: '/images/cards/8.png',
    imageAlt: 'Woman performing a front squat with an AguaForce water weight',
    steps: `### How to perform

- Hold an AguaForce weight close to your chest with both hands, elbows pointing forward
- Stand with feet shoulder-width apart, toes slightly turned out
- Bend your knees and hips to lower into a squat, keeping your torso upright
- Push through your heels to return to standing

### Tips

- Keep your chest lifted so the weight doesn't pull you forward
- Squat as low as your mobility comfortably allows`,
  },
  {
    id: 'card-7',
    name: 'Sumo Squat',
    slug: 'sumo-squat',
    description:
      'Targets the glutes and inner thighs with a wide-stance squat that builds lower-body strength and hip mobility.',
    muscles: ['Glutes', 'Quadriceps'],
    muscles2: ['Abs', 'Calves', 'Hamstrings'],
    imageSrc: '/images/cards/9.png',
    imageAlt: 'Woman performing a sumo squat with an AguaForce water weight',
    steps: `### How to perform

- Stand with feet wider than shoulder-width, toes turned out, holding an AguaForce weight with both hands in front of you
- Bend your knees and hips to lower straight down, keeping the weight between your legs
- Lower until your thighs are close to parallel with the floor
- Push through your heels to return to standing

### Tips

- Keep your knees tracking in line with your toes
- Keep your chest up and back straight throughout`,
  },
  {
    id: 'card-8',
    name: 'Split Squat',
    slug: 'split-squat',
    description:
      'Builds unilateral leg strength and stability in the quadriceps, hamstrings, and calves through a staggered stance.',
    muscles: ['Calves', 'Hamstrings', 'Quadriceps'],
    muscles2: ['Abs'],
    imageSrc: '/images/cards/10.png',
    imageAlt: 'Woman performing a split squat with an AguaForce water weight',
    steps: `### How to perform

- Hold an AguaForce weight close to your chest and step one foot forward into a staggered stance
- Lower your body by bending both knees until your back knee nearly touches the floor
- Keep your front shin roughly vertical and torso upright
- Push through your front heel to return to the start, completing all reps before switching legs

### Tips

- Keep your weight balanced between both legs as you descend
- Take a long enough stride so your front knee stays over your ankle`,
  },
  {
    id: 'card-9',
    name: 'Forward Lunges',
    slug: 'forward-lunges',
    description:
      'Develops lower-body strength and balance by targeting the glutes and quadriceps through alternating forward steps.',
    muscles: ['Glutes', 'Quadriceps'],
    muscles2: ['Hamstrings', 'Abs', 'Calves'],
    imageSrc: '/images/cards/11.png',
    imageAlt: 'Woman performing forward lunges with AguaForce water weights',
    steps: `### How to perform

- Stand tall holding an AguaForce weight in each hand at your sides
- Step forward with one leg and lower your hips until both knees are bent around 90 degrees
- Keep your torso upright and front knee over your ankle
- Push off your front foot to return to standing, then alternate legs

### Tips

- Take a controlled step rather than lunging too far forward
- Keep your core engaged to stay balanced`,
  },
  {
    id: 'card-10',
    name: 'Kneeling Squat',
    slug: 'kneeling-squat',
    description:
      'Isolates the glutes with a controlled kneeling hip-hinge motion, reducing knee strain while building hip strength.',
    muscles: ['Glutes'],
    muscles2: ['Hamstrings', 'Abs', 'Quadriceps'],
    imageSrc: '/images/cards/12.png',
    imageAlt: 'Woman performing a kneeling squat with an AguaForce water weight',
    steps: `### How to perform

- Kneel upright on a mat with knees hip-width apart, holding an AguaForce weight close to your chest
- Keeping your torso tall, sit your hips back toward your heels
- Lower until you feel your glutes engage, without letting your torso collapse forward
- Squeeze your glutes to return to the tall kneeling position

### Tips

- Keep the movement small and controlled
- Use a folded towel or mat under your knees for comfort`,
  },
  {
    id: 'card-11',
    name: 'Glute Bridge',
    slug: 'glute-bridge',
    description:
      'Strengthens the glutes and core through hip extension, also engaging the hamstrings and lower back for hip stability.',
    muscles: ['Glutes'],
    muscles2: ['Abs', 'Lower Back', 'Hamstrings'],
    imageSrc: '/images/cards/14.png',
    imageAlt: 'Woman performing a glute bridge with an AguaForce water weight',
    steps: `### How to perform

- Lie on your back with knees bent and feet flat on the floor, holding an AguaForce weight over your hips
- Press through your heels and lift your hips toward the ceiling
- Squeeze your glutes hard at the top, forming a straight line from shoulders to knees
- Lower your hips back down with control and repeat

### Tips

- Keep the weight steady and centered over your hips
- Avoid overarching your lower back at the top of the movement`,
  },
  {
    id: 'card-12',
    name: 'Overhead Crunch',
    slug: 'overhead-crunch',
    description:
      'Builds core and ab strength through a crunch pattern made more challenging by holding the weight overhead.',
    muscles: ['Abs', 'Obliques'],
    muscles2: ['Glutes', 'Quadriceps', 'Iliopsoas'],
    imageSrc: '/images/cards/15.png',
    imageAlt: 'Woman performing an overhead crunch with an AguaForce water weight',
    steps: `### How to perform

- Lie on your back with knees bent, holding an AguaForce weight overhead with both arms extended
- Keep your arms extended as you crunch up, bringing the weight forward over your chest
- Curl your shoulders off the floor by contracting your abs, not by pulling with your arms
- Lower back down with control until your arms and shoulders return to the floor

### Tips

- Keep your lower back pressed into the floor
- Exhale as you crunch up to fully engage your abs`,
  },
  {
    id: 'card-13',
    name: 'Frog Crunch',
    slug: 'frog-crunch',
    description:
      'Targets the abs with a crunch variation that opens the hips, adding a light stretch through the inner thighs.',
    muscles: ['Abs'],
    muscles2: ['Quads', 'Hip Flexors'],
    imageSrc: '/images/cards/16.png',
    imageAlt: 'Woman performing a frog crunch with an AguaForce water weight',
    steps: `### How to perform

- Lie on your back holding an AguaForce weight against your chest, soles of your feet together and knees dropped open
- Curl your shoulders and upper back off the floor, contracting your abs
- Hold briefly at the top for a squeeze
- Lower back down with control and repeat

### Tips

- Keep your knees relaxed out to the sides throughout
- Focus on lifting with your abs rather than momentum`,
  },
  {
    id: 'card-14',
    name: 'Russian Twist',
    slug: 'russian-twist',
    description:
      'Builds rotational core strength, targeting the abs and obliques through controlled side-to-side twisting.',
    muscles: ['Abs', 'Obliques'],
    muscles2: ['Biceps', 'Forearms', 'Lower Back'],
    imageSrc: '/images/cards/17.png',
    imageAlt: 'Woman performing a Russian twist with an AguaForce water weight',
    steps: `### How to perform

- Sit on the floor with knees bent and lean back slightly, holding an AguaForce weight with both hands at your chest
- Lift your feet slightly off the floor for a greater challenge, or keep them planted for stability
- Rotate your torso to bring the weight to one side of your hips, then rotate to the other side
- Continue alternating sides with control

### Tips

- Keep your chest lifted and back straight rather than rounding
- Move through your torso, not just your arms`,
  },
  {
    id: 'card-15',
    name: 'Side Bend',
    slug: 'side-bend',
    description:
      'Isolates the obliques through a controlled lateral bend, building core strength and stability on each side.',
    muscles: ['Obliques'],
    muscles2: ['Abs'],
    imageSrc: '/images/cards/18.png',
    imageAlt: 'Woman performing a side bend with an AguaForce water weight',
    steps: `### How to perform

- Stand tall holding an AguaForce weight in one hand at your side
- Keeping your hips facing forward, bend directly sideways toward the weight
- Lower as far as comfortable, feeling a stretch through your opposite side
- Contract your obliques to return to standing, then complete all reps before switching sides

### Tips

- Avoid leaning forward or backward as you bend
- Move slowly and keep the motion strictly side-to-side`,
  },
  {
    id: 'card-16',
    name: 'Bent Over Row',
    slug: 'bent-over-row',
    description:
      'Strengthens the back and biceps through a horizontal pulling motion while reinforcing a flat-back hip hinge.',
    muscles: ['Back'],
    muscles2: ['Abs', 'Shoulders', 'Arms'],
    imageSrc: '/images/cards/19.png',
    imageAlt: 'Woman performing a bent over row with an AguaForce water weight',
    steps: `### How to perform

- Stand with feet hip-width apart and hinge forward at the hips, holding an AguaForce weight with both hands, back flat
- Let the weight hang below your chest with arms extended
- Pull the weight up toward your lower ribs, driving your elbows back
- Lower the weight back down with control and repeat

### Tips

- Keep your back flat and core braced throughout
- Squeeze your shoulder blades together at the top of each row`,
  },
  {
    id: 'card-17',
    name: 'Bent Over Reverse Fly',
    slug: 'bent-over-reverse-fly',
    description:
      'Targets the rear shoulders and upper back, improving posture through a controlled arm raise from a hip hinge.',
    muscles: ['Shoulders'],
    muscles2: ['Upper Back', 'Triceps'],
    imageSrc: '/images/cards/20.png',
    imageAlt: 'Woman performing a bent over reverse fly with AguaForce water weights',
    steps: `### How to perform

- Hinge forward at the hips with a flat back, holding an AguaForce weight in each hand below your shoulders
- With a slight bend in your elbows, raise both weights out to your sides until arms are level with your torso
- Squeeze your shoulder blades together at the top
- Lower the weights back down with control and repeat

### Tips

- Keep the movement slow to avoid using momentum
- Keep your neck relaxed and gaze toward the floor`,
  },
  {
    id: 'card-18',
    name: 'Gorilla Row',
    slug: 'gorilla-row',
    description:
      'Builds back and shoulder strength through alternating rows from a deadlift-like stance, challenging core stability.',
    muscles: ['Middle Back', 'Upper Back', 'Lats', 'Shoulders'],
    muscles2: ['Abs', 'Biceps', 'Triceps', 'Forearms', 'Glutes'],
    imageSrc: '/images/cards/21.png',
    imageAlt: 'Woman performing a gorilla row with AguaForce water weights',
    steps: `### How to perform

- Stand with feet wide, hinge forward and place two AguaForce weights on the floor between your feet
- Grip one handle and row it up toward your ribs while the other arm stays extended, supporting your weight
- Lower it back to the floor and repeat on the other side
- Continue alternating sides, keeping your back flat throughout

### Tips

- Keep your hips low and back flat like a deadlift position
- Drive your elbow up and back on each row for full lat engagement`,
  },
  {
    id: 'card-19',
    name: 'Bent Over Kickback',
    slug: 'bent-over-kickback',
    description:
      'Isolates the triceps through a controlled arm extension from a hinged position, building arm strength and stability.',
    muscles: ['Triceps'],
    muscles2: ['Forearms', 'Abs', 'Lower Back'],
    imageSrc: '/images/cards/22.png',
    imageAlt: 'Woman performing a bent over kickback with an AguaForce water weight',
    steps: `### How to perform

- Hinge forward at the hips with a flat back, holding an AguaForce weight in one hand with your elbow bent at your side
- Keeping your upper arm still and close to your body, extend your forearm back until your arm is straight
- Squeeze your triceps at full extension
- Bend your elbow to return to the start and repeat before switching arms

### Tips

- Keep your upper arm pinned to your side throughout the movement
- Avoid swinging the weight — let your triceps do the work`,
  },
  {
    id: 'card-20',
    name: 'Triceps Kickback',
    slug: 'triceps-kickback',
    description:
      'Isolates the triceps with a bench-supported single-arm extension, building arm strength and stability.',
    muscles: ['Triceps'],
    muscles2: ['Abs', 'Forearms'],
    imageSrc: '/images/cards/24.png',
    imageAlt: 'Woman performing a triceps kickback on a bench with an AguaForce water weight',
    steps: `### How to perform

- Kneel on a bench with one hand and knee supporting you, holding an AguaForce weight in your free hand with your elbow bent
- Keep your upper arm parallel to the floor and still
- Extend your forearm back until your arm is fully straight, squeezing your triceps
- Bend your elbow to return to the start, then repeat before switching sides

### Tips

- Keep your back flat and parallel to the floor
- Move only at the elbow — keep your upper arm stationary`,
  },
  {
    id: 'card-21',
    name: 'Concentration Curl',
    slug: 'concentration-curl',
    description:
      'Isolates the biceps through a seated, braced curl that minimizes momentum for focused arm strength.',
    muscles: ['Biceps'],
    muscles2: ['Forearms'],
    imageSrc: '/images/cards/25.png',
    imageAlt: 'Woman performing a concentration curl with an AguaForce water weight',
    steps: `### How to perform

- Sit on a bench with legs spread and lean forward slightly, bracing your elbow against the inside of your thigh
- Hold an AguaForce weight in that hand with your arm extended toward the floor
- Curl the weight up toward your shoulder, squeezing your bicep at the top
- Lower back down with control and repeat before switching arms

### Tips

- Keep your upper arm pinned against your thigh throughout
- Avoid swinging your torso to generate momentum`,
  },
  {
    id: 'card-22',
    name: 'Alternate Biceps Curl',
    slug: 'alternate-biceps-curl',
    description:
      'Builds bicep strength through alternating curls, keeping each arm working independently with control.',
    muscles: ['Biceps'],
    muscles2: ['Forearms'],
    imageSrc: '/images/cards/26.png',
    imageAlt: 'Woman performing alternating biceps curls with AguaForce water weights',
    steps: `### How to perform

- Sit or stand tall holding an AguaForce weight in each hand at your sides, palms facing forward
- Curl one weight up toward your shoulder, keeping your elbow close to your body
- Lower it back down with control while curling the other side, alternating arms
- Continue alternating for all reps

### Tips

- Keep your elbows tucked in and stationary throughout
- Avoid using your shoulders or back to swing the weight up`,
  },
  {
    id: 'card-23',
    name: 'Alternate Hammer Curl',
    slug: 'alternate-hammer-curl',
    description:
      'Targets the biceps and forearms with a neutral-grip curl, alternating arms for balanced strength.',
    muscles: ['Biceps'],
    muscles2: ['Forearms'],
    imageSrc: '/images/cards/27.png',
    imageAlt: 'Woman performing alternating hammer curls with AguaForce water weights',
    steps: `### How to perform

- Stand tall holding an AguaForce weight in each hand at your sides, palms facing your body
- Curl one weight up toward your shoulder while keeping your wrist neutral, like a hammer grip
- Lower it back down with control while curling the other side, alternating arms
- Continue alternating for all reps

### Tips

- Keep your elbows close to your torso throughout
- Keep your palms facing inward for the entire movement`,
  },
  {
    id: 'card-24',
    name: 'Reverse Curl',
    slug: 'reverse-curl',
    description:
      'Strengthens the biceps and forearms through an overhand-grip curl that emphasizes grip and forearm engagement.',
    muscles: ['Biceps'],
    muscles2: ['Forearms'],
    imageSrc: '/images/cards/28.png',
    imageAlt: 'Woman performing a reverse curl with an AguaForce water weight',
    steps: `### How to perform

- Stand tall holding an AguaForce weight with both hands, palms facing down toward your body
- Keeping your elbows close to your sides, curl the weight up toward your chest
- Squeeze at the top, then lower back down with control
- Repeat for all reps, keeping your wrists locked in a neutral, overhand grip

### Tips

- Keep your grip firm to work your forearms along with your biceps
- Avoid letting your wrists bend as you curl`,
  },
  {
    id: 'card-25',
    name: 'Overhead Triceps Extension',
    slug: 'overhead-triceps-extension',
    description:
      'Isolates the triceps through an overhead arm extension, building upper-arm strength and shoulder stability.',
    muscles: ['Triceps'],
    muscles2: ['Abs', 'Shoulders'],
    imageSrc: '/images/cards/29.png',
    imageAlt: 'Woman performing an overhead triceps extension with an AguaForce water weight',
    steps: `### How to perform

- Stand tall holding an AguaForce weight with both hands behind your head, elbows bent and pointing up
- Keeping your upper arms close to your ears and still, extend your arms to press the weight overhead
- Fully straighten your arms, squeezing your triceps at the top
- Bend your elbows to lower the weight back behind your head with control

### Tips

- Keep your elbows pointing forward, not flaring outward
- Brace your core to avoid arching your lower back`,
  },
  {
    id: 'card-26',
    name: 'Upright Row',
    slug: 'upright-row',
    description:
      'Builds shoulder and upper-back strength by pulling the weights vertically along the body toward shoulder height.',
    muscles: ['Shoulders'],
    muscles2: ['Abs', 'Biceps', 'Forearms', 'Upper Back'],
    imageSrc: '/images/cards/30.png',
    imageAlt: 'Woman performing an upright row with AguaForce water weights',
    steps: `### How to perform

- Stand tall holding an AguaForce weight in each hand in front of your thighs, palms facing your body
- Pull both weights straight up along your torso, leading with your elbows
- Raise until your elbows reach shoulder height
- Lower back down with control and repeat

### Tips

- Keep the weights close to your body as you pull them up
- Avoid shrugging your shoulders toward your ears`,
  },
  {
    id: 'card-27',
    name: 'Armpit Row',
    slug: 'armpit-row',
    description:
      'Targets the lateral shoulders and upper back through a wide-elbow pulling motion toward the armpits.',
    muscles: ['Lateral Deltoid'],
    muscles2: ['Brachialis', 'Brachioradialis', 'Serratus Anterior', 'Biceps'],
    imageSrc: '/images/cards/31.png',
    imageAlt: 'Woman performing an armpit row with AguaForce water weights',
    steps: `### How to perform

- Stand tall holding an AguaForce weight in each hand at your sides
- Pull both weights straight up toward your armpits, leading with your elbows out wide
- Raise until your elbows reach shoulder height, keeping the weights close to your ribs
- Lower back down with control and repeat

### Tips

- Keep your elbows flaring out to the sides rather than forward
- Keep your torso upright throughout the movement`,
  },
  {
    id: 'card-28',
    name: 'Lateral Raise',
    slug: 'lateral-raise',
    description:
      'Isolates the shoulders through a controlled side raise, building width and stability in the deltoids.',
    muscles: ['Shoulders'],
    muscles2: [],
    imageSrc: '/images/cards/32.png',
    imageAlt: 'Woman performing a lateral raise with AguaForce water weights',
    steps: `### How to perform

- Stand tall holding an AguaForce weight in each hand at your sides, palms facing your body
- With a slight bend in your elbows, raise both weights out to the sides until they reach shoulder height
- Pause briefly at the top
- Lower back down with control and repeat

### Tips

- Avoid swinging or using momentum from your legs
- Lead the movement with your elbows, not your hands`,
  },
  {
    id: 'card-29',
    name: 'Front Raise',
    slug: 'front-raise',
    description:
      'Targets the front shoulders through a controlled forward raise, building shoulder strength and core stability.',
    muscles: ['Abs', 'Shoulders'],
    muscles2: ['Upper Back', 'Lower Traps'],
    imageSrc: '/images/cards/33.png',
    imageAlt: 'Woman performing a front raise with an AguaForce water weight',
    steps: `### How to perform

- Stand tall holding an AguaForce weight with both hands in front of your thighs
- With arms straight or a slight bend in the elbows, raise the weight forward until it reaches shoulder height
- Pause briefly at the top
- Lower back down with control and repeat

### Tips

- Brace your core to avoid arching your lower back
- Avoid using momentum to swing the weight up`,
  },
  {
    id: 'card-30',
    name: 'Alternate Front Raise',
    slug: 'alternate-front-raise',
    description:
      'Builds shoulder strength through alternating front raises, challenging balance and core stability.',
    muscles: ['Shoulders'],
    muscles2: ['Abs'],
    imageSrc: '/images/cards/34.png',
    imageAlt: 'Woman performing alternating front raises with AguaForce water weights',
    steps: `### How to perform

- Stand tall holding an AguaForce weight in each hand in front of your thighs
- Raise one weight forward to shoulder height while the other stays at your side
- Lower it back down with control while raising the other side, alternating arms
- Continue alternating for all reps

### Tips

- Keep a slight bend in your elbow throughout each raise
- Keep your core braced to avoid leaning back`,
  },
  {
    id: 'card-31',
    name: 'Halo',
    slug: 'halo',
    description:
      'Improves shoulder mobility and core stability by circling the weight around the head with control.',
    muscles: ['Shoulders'],
    muscles2: ['Triceps', 'Upper Back'],
    imageSrc: '/images/cards/35.png',
    imageAlt: 'Woman performing a halo with an AguaForce water weight',
    steps: `### How to perform

- Stand with feet shoulder-width apart, holding an AguaForce weight with both hands at chest height
- Circle the weight around your head, passing it behind your head and back to the front
- Keep your core braced and movements controlled as the weight circles
- Complete the set in one direction, then repeat circling the other way

### Tips

- Keep the weight close to your head throughout the circle
- Move slowly to maintain control and stability`,
  },
  {
    id: 'card-32',
    name: 'Pullover',
    slug: 'pullover',
    description:
      'Strengthens the chest, upper back, and lats through an overhead arm movement performed on a bench.',
    muscles: ['Chest', 'Upper Back', 'Lower Traps'],
    muscles2: ['Abs', 'Shoulders', 'Triceps'],
    imageSrc: '/images/cards/36.png',
    imageAlt: 'Woman performing a pullover on a bench with an AguaForce water weight',
    steps: `### How to perform

- Lie with your upper back supported on a bench, hips low, feet planted on the floor
- Hold an AguaForce weight with both hands straight above your chest
- Keeping a slight bend in your elbows, lower the weight back and down behind your head until you feel a stretch
- Pull the weight back up over your chest, squeezing your chest and lats

### Tips

- Keep your hips low to protect your lower back
- Move slowly, especially on the way down`,
  },
  {
    id: 'card-33',
    name: 'Svend Press',
    slug: 'svend-press',
    description:
      'Builds chest and tricep strength through a squeeze-and-press motion that emphasizes constant muscle tension.',
    muscles: ['Chest'],
    muscles2: ['Biceps', 'Triceps'],
    imageSrc: '/images/cards/37.png',
    imageAlt: 'Woman performing a Svend press with an AguaForce water weight',
    steps: `### How to perform

- Stand tall holding an AguaForce weight with both hands flat against your chest, squeezing it between your palms
- Keeping the squeeze on, press the weight straight out in front of you until your arms are extended
- Pause and keep pressing your palms together
- Bring the weight back to your chest with control and repeat

### Tips

- Keep constant inward pressure on the weight throughout
- Keep your elbows up and out rather than dropping down`,
  },
  {
    id: 'card-34',
    name: 'Chest Press',
    slug: 'chest-press',
    description:
      'Strengthens the chest, shoulders, and triceps through a pressing motion performed lying on the floor.',
    muscles: ['Chest'],
    muscles2: ['Abs', 'Shoulders', 'Triceps'],
    imageSrc: '/images/cards/38.png',
    imageAlt: 'Woman performing a chest press on the floor with AguaForce water weights',
    steps: `### How to perform

- Lie on your back with knees bent, holding an AguaForce weight in each hand at chest level, elbows bent
- Press both weights straight up above your chest until your arms are extended
- Pause briefly at the top
- Lower back down with control until your elbows are near the floor, then repeat

### Tips

- Keep your wrists stacked directly above your elbows
- Press evenly with both arms to keep the weights level`,
  },
  {
    id: 'card-35',
    name: 'Shoulder Press',
    slug: 'shoulder-press',
    description:
      'Builds shoulder and tricep strength through a seated overhead press, also engaging the core for stability.',
    muscles: ['Shoulders'],
    muscles2: ['Abs', 'Triceps', 'Upper Back'],
    imageSrc: '/images/cards/39.png',
    imageAlt: 'Woman performing a seated shoulder press with AguaForce water weights',
    steps: `### How to perform

- Sit tall on a bench holding an AguaForce weight in each hand at shoulder height, palms facing forward
- Press both weights straight overhead until your arms are fully extended
- Pause briefly at the top without locking your elbows harshly
- Lower back down with control to shoulder height and repeat

### Tips

- Keep your core braced to avoid arching your lower back
- Press the weights in a straight line rather than out in front`,
  },
  {
    id: 'card-36',
    name: 'Squat with Alternating Wave',
    slug: 'squat-with-alternating-wave',
    description:
      'Combines a squat with alternating arm punches to build lower-body strength and coordination between arms and legs.',
    muscles: ['Abs', 'Shoulders', 'Upper Back'],
    muscles2: ['Biceps', 'Glutes', 'Calves', 'Hamstrings', 'Quadriceps'],
    imageSrc: '/images/cards/40.png',
    imageAlt: 'Woman performing a squat with an alternating wave using AguaForce water weights',
    steps: `### How to perform

- Stand with feet shoulder-width apart holding an AguaForce weight in each hand at shoulder height
- Lower into a squat while punching one weight forward, extending that arm
- As you stand back up, pull that arm back and punch the other weight forward
- Continue alternating arms with each squat repetition

### Tips

- Keep your core braced to stay stable while punching
- Keep your squat depth and tempo consistent as you alternate arms`,
  },
]
