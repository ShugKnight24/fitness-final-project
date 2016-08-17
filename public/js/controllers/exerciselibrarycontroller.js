var app = angular.module('fitnessApp');

app.controller("exerciseLibraryController",["$scope", function($scope){
  // Array for objects of exercises the user can look through
  $scope.exerciseDescriptions =[
    {
      "bodypart":"Chest",
      "exerciseName":"Barbell Bench Press",
      "exerciseDescription": "Lying on a flat bench, hold the barbell over the chest, arms straight, hands placed slightly outside of shoulder width. Keep your chest up at all time, and allow the lower back to maintain a natural arch (not excessive). Lower the barbell to the top of the chest.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BBBenchPress.gif"
    },
    {
      "bodypart":"Chest",
      "exerciseName":"Incline Bench Press",
      "exerciseDescription": "Lying on an incline bench, hold the barbell over the chest, arms straight, hands placed slightly outside of shoulder width. Keep your chest up at all time, and allow the lower back to maintain a natural arch (not excessive). Lower the barbell to the top of the chest.",
      "exerciseVideo": "",
      "exerciseGif":"images/exercisegifs/BBInclineBenchPress.gif"
    },
    {
      "bodypart":"Chest",
      "exerciseName":"Dumbbell Bench Press",
      "exerciseDescription": "Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other. Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position. Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly.",
      "exerciseVideo": "",
      "exerciseGif":"images/exercisegifs/DBBenchPress.gif"
    },
    {
      "bodypart":"Chest",
      "exerciseName":"Cable Standing Flies",
      "exerciseDescription": "To get yourself into the starting position, place the pulleys on a high position (above your head), select the resistance to be used and hold the pulleys in each hand. Step forward in front of an imaginary straight line between both pulleys while pulling your arms together in front of you. Your torso should have a small forward bend from the waist. This will be your starting position. With a slight bend on your elbows in order to prevent stress at the biceps tendon, extend your arms to the side (straight out at both sides) in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms and torso should remain stationary; the movement should only occur at the shoulder joint. Return your arms back to the starting position as you breathe out. Make sure to use the same arc of motion used to lower the weights.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/CBStandingFly.gif"
    },
    {
      "bodypart":"Back",
      "exerciseName":"Barbell Bent Over Row",
      "exerciseDescription": "Holding a barbell with a pronated grip (palms facing down), bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The barbell should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position. Now, while keeping the torso stationary, breathe out and lift the barbell to you. Keep the elbows close to the body and only use the forearms to hold the weight. At the top contracted position, squeeze the back muscles and hold for a brief pause. Then inhale and slowly lower the barbell back to the starting position.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BBBentOverRow.gif"
    },
    {
      "bodypart":"Back",
      "exerciseName":"Dumbbell One-Arm Row",
      "exerciseDescription": "Choose a flat bench and place a dumbbell on each side of it. Place the right leg on top of the end of the bench, bend your torso forward from the waist until your upper body is parallel to the floor, and place your right hand on the other end of the bench for support. Use the left hand to pick up the dumbbell on the floor and hold the weight while keeping your lower back straight. The palm of the hand should be facing your torso. This will be your starting position. Pull the resistance straight up to the side of your chest, keeping your upper arm close to your side and keeping the torso stationary. Breathe out as you perform this step. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. Also, make sure that the force is performed with the back muscles and not the arms. Finally, the upper torso should remain stationary and only the arms should move. The forearms should do no other work except for holding the dumbbell; therefore do not try to pull the dumbbell up using the forearms. Lower the resistance straight down to the starting position. Breathe in as you perform this step.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/DBBentoverRow.gif"
    },
    {
      "bodypart":"Back",
      "exerciseName":"Wide Grip Pull Ups",
      "exerciseDescription": "Grab the pull-up bar with the palms facing forward using the prescribed grip. Note on grips: For a wide grip, your hands need to be spaced out at a distance wider than your shoulder width. For a medium grip, your hands need to be spaced out at a distance equal to your shoulder width and for a close grip at a distance smaller than your shoulder width. As you have both arms extended in front of you holding the bar at the chosen grip width, bring your torso back around 30 degrees or so while creating a curvature on your lower back and sticking your chest out. This is your starting position. Pull your torso up until the bar touches your upper chest by drawing the shoulders and the upper arms down and back. Exhale as you perform this portion of the movement. Tip: Concentrate on squeezing the back muscles once you reach the full contracted position. The upper torso should remain stationary as it moves through space and only the arms should move. The forearms should do no other work other than hold the bar. After a second on the contracted position, start to inhale and slowly lower your torso back to the starting position when your arms are fully extended and the lats are fully stretched.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BWWideGripPullup.gif"
    },
    {
      "bodypart":"Back",
      "exerciseName":"Lat Pull Down",
      "exerciseDescription": "Start with your hands on the bar slightly wider than shoulder-width, arms straight and palms facing forward. Pull the bar straight down under your chin, toward the top of your chest. Keep your chest up and your elbows out to the side. Return slowly to the top, with your arms straight again.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/CBFrontPulldown.gif"
    },
    {
      "bodypart":"Lower Back",
      "exerciseName":"Barbell Deadlift",
      "exerciseDescription": "Approach the bar so that it is centered over your feet. Your feet should be about hip-width apart. Bend at the hip to grip the bar at shoulder-width allowing your shoulder blades to protract. Typically, you would use an alternating grip. With your feet and your grip set, take a big breath and then lower your hips and flex the knees until your shins contact the bar. Look forward with your head. Keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BBDeadlift.gif"
    },
    {
      "bodypart":"Lower Back",
      "exerciseName":"Body Weight Hyperextensions",
      "exerciseDescription": "Lie face down on a hyperextension bench, tucking your ankles securely under the footpads. Adjust the upper pad if possible so your upper thighs lie flat across the wide pad, leaving enough room for you to bend at the waist without any restriction. With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms. Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you feel a nice stretch on the hamstrings and you can no longer keep going without a rounding of the back. Tip: Never round the back as you perform this exercise. Also, some people can go farther than others. The key thing is that you go as far as your body allows you to without rounding the back. Slowly raise your torso back to the initial position as you inhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BWHyperExtensionHead.gif"
    },
    {
      "bodypart":"Quads",
      "exerciseName":"Barbell Squats",
      "exerciseDescription": "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack just above shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it. Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder-width medium stance with the toes slightly pointed out. Keep your head up at all times and maintain a straight back. This will be your starting position.Begin to slowly lower the bar by bending the knees and sitting back with your hips as you maintain a straight posture with the head up. Continue down until your hamstrings are on your calves. Inhale as you perform this portion of the movement. Begin to raise the bar as you exhale by pushing the floor with the heel or middle of your foot as you straighten the legs and extend the hips to go back to the starting position.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BBFullSquat.gif"
    },
    {
      "bodypart":"Quads",
      "exerciseName":"Leg Extensions",
      "exerciseDescription": "For this exercise you will need to use a leg extension machine. First choose your weight and sit on the machine with your legs under the pad (feet pointed forward) and the hands holding the side bars. This will be your starting position. Tip: You will need to adjust the pad so that it falls on top of your lower leg (just above your feet). Also, make sure that your legs form a 90-degree angle between the lower and upper leg. If the angle is less than 90-degrees then that means the knee is over the toes which in turn creates undue stress at the knee joint. If the machine is designed that way, either look for another machine or just make sure that when you start executing the exercise you stop going down once you hit the 90-degree angle. Using your quadriceps, extend your legs to the maximum as you exhale. Ensure that the rest of the body remains stationary on the seat. Pause a second on the contracted position. Slowly lower the weight back to the original position as you inhale, ensuring that you do not go past the 90-degree angle limit.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/LegExtension.gif"
    },
    {
      "bodypart":"Quads",
      "exerciseName":"Leg Press",
      "exerciseDescription": "Using a leg press machine, sit down on the machine and place your legs on the platform directly in front of you at a medium (shoulder width) foot stance. (Note: For the purposes of this discussion we will use the medium stance described above which targets overall development; however you can choose any of the three stances described in the foot positioning section). Lower the safety bars holding the weighted platform in place and press the platform all the way up until your legs are fully extended in front of you. Tip: Make sure that you do not lock your knees. Your torso and the legs should make a perfect 90-degree angle. This will be your starting position. As you inhale, slowly lower the platform until your upper and lower legs make a 90-degree angle. Pushing mainly with the heels of your feet and using the quadriceps go back to the starting position as you exhale.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/45DegLegPressQuad.gif"
    },
    {
      "bodypart":"Hamstrings",
      "exerciseName":"Good Morning",
      "exerciseDescription": "Begin with a bar on a rack at shoulder height. Rack the bar across the rear of your shoulders as you would a power squat, not on top of your shoulders. Keep your back tight, shoulder blades pinched together, and your knees slightly bent. Step back from the rack. Begin by bending at the hips, moving them back as you bend over to near parallel. Keep your back arched and your cervical spine in proper alignment. Reverse the motion by extending through the hips with your glutes and hamstrings. Continue until you have returned to the starting position.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BBGoodMorning.gif"
    },
    {
      "bodypart":"Hamstrings",
      "exerciseName":"Lying Leg Curl",
      "exerciseDescription": "Adjust the machine lever to fit your height and lie face down on the leg curl machine with the pad of the lever on the back of your legs (just a few inches under the calves). Tip: Preferably use a leg curl machine that is angled as opposed to flat since an angled position is more favorable for hamstrings recruitment. Keeping the torso flat on the bench, ensure your legs are fully stretched and grab the side handles of the machine. Position your toes straight (or you can also use any of the other two stances described on the foot positioning section). This will be your starting position. As you exhale, curl your legs up as far as possible without lifting the upper legs from the pad. Once you hit the fully contracted position, hold it for a second. As you inhale, bring the legs back to the initial position.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/LyingLegCurl.gif"
    },
    {
      "bodypart":"Hamstrings",
      "exerciseName":"Seated Leg Curl",
      "exerciseDescription": "Adjust the machine lever to fit your height and sit on the machine with your back against the back support pad. Place the back of lower leg on top of padded lever (just a few inches under the calves) and secure the lap pad against your thighs, just above the knees. Then grasp the side handles on the machine as you point your toes straight (or you can also use any of the other two stances) and ensure that the legs are fully straight right in front of you. This will be your starting position. As you exhale, pull the machine lever as far as possible to the back of your thighs by flexing at the knees. Keep your torso stationary at all times. Hold the contracted position for a second. Slowly return to the starting position as you breathe in.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/SeatedLegCurl.gif"
    },
    {
      "bodypart":"Shoulders",
      "exerciseName":"Barbell Over Head Press / Military Press",
      "exerciseDescription": "Start by placing a barbell that is about chest high on a squat rack. Once you have selected the weights, grab the barbell using a pronated (palms facing forward) grip. Make sure to grip the bar wider than shoulder width apart from each other. Slightly bend the knees and place the barbell on your collar bone. Lift the barbell up keeping it lying on your chest. Take a step back and position your feet shoulder width apart from each other. Once you pick up the barbell with the correct grip length, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position. Lower the bar down to the collarbone slowly as you inhale. Lift the bar back up to the starting position as you exhale.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BBMilitaryPress.gif"
    },
    {
      "bodypart":"Shoulders",
      "exerciseName":"Dumbbell Side Laterals",
      "exerciseDescription": "Pick a couple of dumbbells and stand with a straight torso and the dumbbells by your side at arms length with the palms of the hand facing you. This will be your starting position. While maintaining the torso in a stationary position (no swinging), lift the dumbbells to your side with a slight bend on the elbow and the hands slightly tilted forward as if pouring water in a glass. Continue to go up until you arms are parallel to the floor. Exhale as you execute this movement and pause for a second at the top. Lower the dumbbells back down slowly to the starting position as you inhale.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/DBLateralRaise.gif"
    },
    {
      "bodypart":"Shoulders",
      "exerciseName":"Dumbbell Rear Delt Fly",
      "exerciseDescription": "Place a couple of dumbbells looking forward in front of a flat bench. Sit on the end of the bench with your legs together and the dumbbells behind your calves. Bend at the waist while keeping the back straight in order to pick up the dumbbells. The palms of your hands should be facing each other as you pick them. This will be your starting position. Keeping your torso forward and stationary, and the arms slightly bent at the elbows, lift the dumbbells straight to the side until both arms are parallel to the floor. Exhale as you lift the weights. (Note: avoid swinging the torso or bringing the arms back as opposed to the side.) After a one second contraction at the top, slowly lower the dumbbells back to the starting position. Repeat for the recommended amount of repetitions.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/DBRearLateralRaise.gif"
    },
    {
      "bodypart":"Shoulders",
      "exerciseName":"Dumbbell Front Raise",
      "exerciseDescription": "Pick a couple of dumbbells and stand with a straight torso and the dumbbells on front of your thighs at arms length with the palms of the hand facing your thighs. This will be your starting position. While maintaining the torso stationary (no swinging), lift the left dumbbell to the front with a slight bend on the elbow and the palms of the hands always facing down. Continue to go up until you arm is slightly above parallel to the floor. Exhale as you execute this portion of the movement and pause for a second at the top. Inhale after the second pause. Now lower the dumbbell back down slowly to the starting position as you simultaneously lift the right dumbbell.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/DBFrontRaise.gif"
    },
    {
      "bodypart":"Shoulders",
      "exerciseName":"Barbell Upright Row",
      "exerciseDescription": "Grasp a barbell with an overhand grip that is slightly less than shoulder width. The bar should be resting on the top of your thighs with your arms extended and a slight bend in your elbows. Your back should also be straight. This will be your starting position. Now exhale and use the sides of your shoulders to lift the bar, raising your elbows up and to the side. Keep the bar close to your body as you raise it. Continue to lift the bar until it nearly touches your chin. Tip: Your elbows should drive the motion, and should always be higher than your forearms. Remember to keep your torso stationary and pause for a second at the top of the movement. Lower the bar back down slowly to the starting position. Inhale as you perform this portion of the movement.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BBUprightRow.gif"
    },
    {
      "bodypart":"Shoulders",
      "exerciseName":"Rope Face Pull",
      "exerciseDescription": "Facing a high pulley with a rope or dual handles attached, pull the weight directly towards your face, separating your hands as you do so. Keep your upper arms parallel to the ground.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/StandingRearDeltRowRope.gif"
    },
    {
      "bodypart":"Biceps",
      "exerciseName":"Barbell Curl",
      "exerciseDescription": "Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BBCurl.gif"
    },
    {
      "bodypart":"Biceps",
      "exerciseName":"Supinated Dumbbell Curl",
      "exerciseDescription": "Hold a pair of dumbbells at your sides using a neutral grip, palms facing inward toward your body. Curl the weight up while twisting your forearm at the same time, so that at the top of the movement your palm is facing the ceiling. Lower the weight following the same path, and twist your forearm downward so that your hands are in a neutral position again at the bottom.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/DBCurl.gif"
    },
    {
      "bodypart":"Biceps",
      "exerciseName":"Dumbbell Hammer Curls",
      "exerciseDescription": "Stand up with your torso upright and a dumbbell on each hand being held at arms length. The elbows should be close to the torso. The palms of the hands should be facing your torso. This will be your starting position. Now, while holding your upper arm stationary, exhale and curl the weight forward while contracting the biceps. Continue to raise the weight until the biceps are fully contracted and the dumbbell is at shoulder level. Hold the contracted position for a brief moment as you squeeze the biceps. Tip: Focus on keeping the elbow stationary and only moving your forearm. After the brief pause, inhale and slowly begin the lower the dumbbells back down to the starting position.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/DBHammerCurl.gif"
    },
    {
      "bodypart":"Triceps",
      "exerciseName":"Tricep Pushdown",
      "exerciseDescription": "Attach a straight or angled bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width. Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. This is your starting position. Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement. After a second hold at the contracted position, bring the bar slowly up to the starting point. Breathe in as you perform this step.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/CBPushdown.gif"
    },
    {
      "bodypart":"Triceps",
      "exerciseName":"Barbell Skull Crushers",
      "exerciseDescription": "While holding a barbell or EZ Curl bar with a pronated grip (palms facing forward), lie on your back on a flat bench with your head close to the end of the bench. Tip: If you are holding a barbell grab it using a shoulder-width grip and if you are using an E-Z Bar grab it on the inner handles. Extend your arms in front of you and slowly bring the bar back in a semi circular motion (while keeping the arms extended) to a position over your head. At the end of this step your arms should be overhead and perpendicular to the floor. This will be your starting position. Tip: Keep your elbows in at all times. As you inhale, lower the bar by bending at the elbows and while keeping the upper arm stationary. Keep lowering the bar until your forearms are perpendicular to the floor. As you exhale bring the bar back up to the starting position by pushing the bar up in a semi-circular motion until the lower arms are also parallel to the floor. Contract the triceps hard at the top of the movement for a second. Tip: Again, only the forearms should move. The upper arms should remain stationary at all times.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BBLyingTricepsExtensionSC.gif"
    },
    {
      "bodypart":"Triceps",
      "exerciseName":"Dumbbell Tricep Kickback",
      "exerciseDescription": "Start with a dumbbell in each hand and your palms facing your torso. Keep your back straight with a slight bend in the knees and bend forward at the waist. Your torso should be almost parallel to the floor. Make sure to keep your head up. Your upper arms should be close to your torso and parallel to the floor. Your forearms should be pointed towards the floor as you hold the weights. There should be a 90-degree angle formed between your forearm and upper arm. This is your starting position. Now, while keeping your upper arms stationary, exhale and use your triceps to lift the weights until the arm is fully extended. Focus on moving the forearm. After a brief pause at the top contraction, inhale and slowly lower the dumbbells back down to the starting position.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/DBKickback.gif"
    },
    {
      "bodypart":"Abs",
      "exerciseName":"Crunch",
      "exerciseDescription": "Lie flat on your back with your feet flat on the ground, or resting on a bench with your knees bent at a 90 degree angle. If you are resting your feet on a bench, place them three to four inches apart and point your toes inward so they touch. Now place your hands lightly on either side of your head keeping your elbows in. Tip: Don't lock your fingers behind your head. While pushing the small of your back down in the floor to better isolate your abdominal muscles, begin to roll your shoulders off the floor. Continue to push down as hard as you can with your lower back as you contract your abdominals and exhale. Your shoulders should come up off the floor only about four inches, and your lower back should remain on the floor. At the top of the movement, contract your abdominals hard and keep the contraction for a second. Tip: Focus on slow, controlled movement - don't cheat yourself by using momentum. After the one second contraction, begin to come down slowly again to the starting position as you inhale.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BWCrunchHead.gif"
    },
    {
      "bodypart":"Abs",
      "exerciseName":"Rope Crunch",
      "exerciseDescription": "Kneel 1-2 feet in front of a cable system with a rope attached. After selecting an appropriate weight, grasp the rope with both hands reaching overhead. Your torso should be upright in the starting position. To begin, flex at the spine, attempting to bring your rib cage to your legs as you pull the cable down. Pause at the bottom of the motion, and then slowly return to the starting position. These can be done with twists or to the side to hit the obliques.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/CBKneelingCrunch.gif"
    },
    {
      "bodypart":"Abs",
      "exerciseName":"Plank",
      "exerciseDescription": "Get into a prone position on the floor, supporting your weight on your toes and your forearms. Your arms are bent and directly below the shoulder. Keep your body straight at all times, and hold this position as long as possible. To increase difficulty, an arm or leg can be raised.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/FrontPlank.jpg"
    },
    {
      "bodypart":"Obliques",
      "exerciseName":"Twisiting Incline Sit-Up",
      "exerciseDescription": "",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BWTwistingSitupsNeck.gif"
    },
    {
      "bodypart":"Obliques",
      "exerciseName":"Russian Twist",
      "exerciseDescription": "Lie down on the floor placing your feet either under something that will not move or by having a partner hold them. Your legs should be bent at the knees. Elevate your upper body so that it creates an imaginary V-shape with your thighs. Your arms should be fully extended in front of you perpendicular to your torso and with the hands clasped. This is the starting position. Twist your torso to the right side until your arms are parallel with the floor while breathing out. Hold the contraction for a second and move back to the starting position while breathing out. Now move to the opposite side performing the same techniques you applied to the right side.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/MBRussianTwistBall.gif"
    },
    {
      "bodypart":"Calves",
      "exerciseName":"Seated Calf Raise",
      "exerciseDescription": "Sit on the machine and place your toes on the lower portion of the platform provided with the heels extending off. Choose the toe positioning of your choice (forward, in, or out) as per the beginning of this chapter. Place your lower thighs under the lever pad, which will need to be adjusted according to the height of your thighs. Now place your hands on top of the lever pad in order to prevent it from slipping forward. Lift the lever slightly by pushing your heels up and release the safety bar. This will be your starting position. Slowly lower your heels by bending at the ankles until the calves are fully stretched. Inhale as you perform this movement. Raise the heels by extending the ankles as high as possible as you contract the calves and breathe out. Hold the top contraction for a second.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/LVSeatedCalfRaiseH.gif"
    },
    {
      "bodypart":"Calves",
      "exerciseName":"Machine Standing Calf Raise",
      "exerciseDescription": "Adjust the padded lever of the calf raise machine to fit your height. Place your shoulders under the pads provided and position your toes facing forward (or using any of the two other positions described at the beginning of the chapter). The balls of your feet should be secured on top of the calf block with the heels extending off it. Push the lever up by extending your hips and knees until your torso is standing erect. The knees should be kept with a slight bend; never locked. Toes should be facing forward, outwards or inwards as described at the beginning of the chapter. This will be your starting position. Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down. Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched. Repeat for the recommended amount of repetitions.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/LVStandingCalfRaise.gif"
    },
    {
      "bodypart":"Traps",
      "exerciseName":"Barbell Shrugs",
      "exerciseDescription": "Stand up straight with your feet at shoulder width as you hold a barbell with both hands in front of you using a pronated grip (palms facing the thighs). Tip: Your hands should be a little wider than shoulder width apart. You can use wrist wraps for this exercise for a better grip. This will be your starting position. Raise your shoulders up as far as you can go as you breathe out and hold the contraction for a second. Tip: Refrain from trying to lift the barbell by using your biceps. Slowly return to the starting position as you breathe in.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BBShrug.gif"
    },
    {
      "bodypart":"Traps",
      "exerciseName":"Dumbbell Shrugs",
      "exerciseDescription": "Stand erect with a dumbbell on each hand (palms facing your torso), arms extended on the sides. Lift the dumbbells by elevating the shoulders as high as possible while you exhale. Hold the contraction at the top for a second. Tip: The arms should remain extended at all times. Refrain from using the biceps to help lift the dumbbells. Only the shoulders should be moving up and down. Lower the dumbbells back to the original position.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/DBShrug.gif"
    },
    {
      "bodypart":"Forearms",
      "exerciseName":"Barbell Wrist Curls",
      "exerciseDescription": "Start out by placing a barbell on one side of a flat bench. Kneel down on both of your knees so that your body is facing the flat bench. Use your arms to grab the barbell with a supinated grip (palms up) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge. Start out by curling your wrist upwards and exhaling. Slowly lower your wrists back down to the starting position while inhaling. Your forearms should be stationary as your wrist is the only movement needed to perform this exercise.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BBWristCurl.gif"
    },
    {
      "bodypart":"Forearms",
      "exerciseName":"Farmer's Walk",
      "exerciseDescription": "There are various implements that can be used for the farmers walk. These can also be performed with heavy dumbbells or short bars if these implements aren't available. Begin by standing between the implements. After gripping the handles, lift them up by driving through your heels, keeping your back straight and your head up. Walk taking short, quick steps, and don't forget to breathe. Move for a given distance, typically 50-100 feet, as fast as possible. Slowly build the weight used or the distance walked to increase grip strength.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/FarmerWalk.gif"
    },
    {
      "bodypart":"Glutes",
      "exerciseName":"Glute Bridge",
      "exerciseDescription": "Lie flat on the floor on your back with the hands by your side and your knees bent. Your feet should be placed around shoulder width. This will be your starting position. Pushing mainly with your heels, lift your hips off the floor while keeping your back straight. Breathe out as you perform this part of the motion and hold at the top for a second. Slowly go back to the starting position as you breathe in.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/GluteBridge.gif"
    },
    {
      "bodypart":"Glutes",
      "exerciseName":"Barbell Glute Bridge",
      "exerciseDescription": "Begin seated on the ground with a loaded barbell over your legs. Using a fat bar or having a pad on the bar can greatly reduce the discomfort caused by this exercise. Roll the bar so that it is directly above your hips, and lay down flat on the floor. Begin the movement by driving through with your heels, extending your hips vertically through the bar. Your weight should be supported by your upper back and the heels of your feet. Extend as far as possible, then reverse the motion to return to the starting position.",
      "exerciseVideo":"",
      "exerciseGif":"images/exercisegifs/BBGluteBridge.gif"
    }
  ];

  //Materialize Accordion
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
}]);
