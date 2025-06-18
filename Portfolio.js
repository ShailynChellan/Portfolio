const projects = {
  project1: {
    images: ['Assets/ERS1.JPG', 'Assets/ERS2.JPG', 'Assets/ERS3.JPG', 'Assets/ERS4.JPG', 'Assets/ERS5.JPG', 'Assets/ERS6.JPG', 'Assets/ERS7.JPG', 'Assets/ERS8.JPG', 'Assets/ERSA1.JPG', 'Assets/ERS2.JPG'],
    details: `<h3>PulsePoint (Emergency Response System)</h3>
						<h4><u>Frameworks/Tools/Languages Used:</u></h4>
						<p> PHP, JavaScript, CSS, HTML, JAVA, SQLs (for Analytics), Microsoft Access (for Storing Information for the Dispatchers and Respondents) and Microsoft Excel (for Incident Reports)</p><br>
						<h4><u>Project Details:</u></h4>
						<p>PulsePoint was a group project that my team and I developed during our final year on campus. It’s an Emergency Response System designed to support South Africa’s various emergency units. The project consisted of two core components: a web-based dashboard and a mobile application.</p>
						<h5><u>How The System Works: </u></h5>
						<p>When someone in need of urgent assistance contacts the help center, a dispatcher creates a quick incident report. This report includes the caller’s name, phone number, and address (if available), along with details such as the type of incident, its urgency level (priority), and a short description of what occurred.</p>
						<p>The dispatcher then assigns the incident to the nearest available respondent. However, this assignment is only possible if the respondent has logged into the system and is marked as "online" and "available." This is where the mobile application becomes essential.</p>
						<p>Respondents use the mobile app to clock into their shift by answering a few basic questions. Once cleared, they are allowed to select a vehicle for their shift, taking into account the vehicle’s current mileage and available medical supplies. At the end of the shift, they are required to log the updated mileage for tracking and maintenance purposes.</p>
						<p>Our system included several advanced features to enhance efficiency and oversight such as: Roster creation for scheduling shifts, Analytics for tracking respondent shifts, vehicle usage, response times, and identifying high-risk areas, Integrated Google Maps API to show real-time incident and responder locations, Live text chat between dispatchers and responders and Admin controls for managing users and resources (respondents, dispatchers, vehicles).</p>
						<h5><u>My Role and Responsibilities:</u></h5>
						<p>For this project, I was responsible for developing both the frontend and backend of the Analytics Page and the Incident Creation Page.</p>
						<h5><u>Analytical Page:</u></h5>
						<p>I used HTML and CSS for the visual layout and PHP for the logic and data processing. This page provided in-depth insights such as: Respondent wage tracking on an hourly, weekly, and monthly basis. Wages were calculated based on shift duration and frequency, Vehicle mileage monitoring to determine when maintenance was required, Medical inventory tracking to identify when ambulances needed restocking, Response time averages to help improve incident resolution efficiency, High-Risk Area detection using geolocation data and incident patterns — over time, the system could identify zones with frequent emergencies, allowing preemptive respondent placement, Points of Interest integration with Google Maps, highlighting caller locations for precise navigation and the Priority Tab, which analyzed all completed incidents by their priority level. It displayed this data in a color-coded pie chart, categorized by day, month, or year. This helped identify how many high-priority incidents occurred over time, guiding resource allocation and preparedness.</p>
						<h5><u>Incident Creation Page:</u></h5>
						<p>For the Incident Creation Page, I developed both the frontend and backend components. The frontend was built using HTML and CSS to provide a clean, user-friendly interface for dispatchers. The backend logic was handled using PHP, JavaScript, and SQL, allowing us to capture, process, and store incident information in real time.</p>
						<p>This module was designed for use by dispatchers during emergency calls. When a caller contacted the emergency center, the dispatcher would open the page and begin logging key information. The form allowed them to quickly enter: The caller’s name, phone number, and address, A brief description of the incident, The type of emergency (e.g., medical, fire, police), The incident category and its priority level (to assess urgency), Whether or not the caller had medical aid, which helps avoid potential complications with ambulance billing.</p>
						<p>One of the most critical features was the ability for the dispatcher to assign the incident to the nearest available respondent. Our system displayed live statuses of respondents who had signed into their shift and were marked as “available”. The dispatcher could also view each respondent’s location in real time, ensuring the closest and most relevant unit was sent to the scene. Once the incident was logged and assigned, all the data was automatically saved to a Microsoft Excel spreadsheet for secure recordkeeping and future reference. This ensured that even if the system went offline, a copy of the report was preserved.</p>
						<p>In some situations, callers were unable to provide a clear or valid address, whether due to distress, unfamiliar surroundings, or technical limitations. To solve this, we built an automatic fallback feature into the incident creation process. If the address field was left blank or marked as “Unknown,” the system would instantly trigger a backup location-gathering mechanism. The way it worked is that the system would generate a secure SMS message to the caller’s phone number. This message included a link to a location-tracking page, custom-built to work on mobile devices. When the caller tapped the link, the page used browser-based geolocation (e.g., .geolocation) to request their device’s current coordinates. Once approved, the location data was sent back to our system and displayed on a Google Maps-integrated dashboard, allowing the respondent to reach them quickly and accurately. To securely send the SMS, we authenticated our request using Base64-encoded API credentials and connected to a third-party SMS service (SMSPortal) to dispatch the message in real time. This ensured that the entire process remained secure, fast, and reliable. By integrating this feature directly into the incident creation workflow, we eliminated the risk of losing valuable time due to missing location data, ensuring that no emergency would go unanswered, even in the most difficult scenarios.</p>`
  },
  project2: {
    images: ['Assets/TOH1.png','Assets/TOH2.png','Assets/TOH3.png','Assets/TOH4.png','Assets/TOH5.png','Assets/TOH6.png','Assets/TOH7.png','Assets/TOH8.png','Assets/TOH9.png'],
    details: `<h3>Towers of Hanoi</h3>
						<h4><u>Frameworks/Tools/Languages Used:</u></h4>
						<p>Unity Engine, C#</p><br>
						<h4><u>Project Details:</u></h4>
						<p>This is my take on the classical mathematical puzzle game, Towers of Hanoi. It includes whimsical menu music, dynamic difficulty scaling from 3 disks up to 7 disks, randomly generated colors for the disks, and more. There is also an added sense of competitiveness with the implementation of a leaderboard that tracks and saves player scores based on completion time and the number of moves used, and then displays all this information in the Leaderboard Menu. This was so that players would have a sense of accomplishment once they achieved a new fastest time or completed the game in the lowest number of moves possible. When creating this game, my biggest factors to take into consideration where ease of use and user friendliness</p>
						<h5><u>How The Game Works: </u></h5>
						<p>When the game launches, the player is greeted by the Main Menu, which offers three options: Play Game, Leaderboards, and Exit Game.</p>
						<p>Selecting Play Game takes the player to a setup screen where they choose the number of disks they'd like to play with, ranging from 3 to 7. Once selected, the game begins. The objective of the game is to move all the disks to the last rod, arranging them from largest at the bottom to smallest at the top. The game follows a few key rules: Only one disk can be selected and moved at a time. Only the topmost disk in any stack can be moved. A larger disk cannot be placed on top of a smaller one.</p>
						<p>Choosing the Leaderboards option directs the player to a dedicated screen displaying all recorded attempts, including the number of moves and time taken for each disk configuration.</p>
						<p>Finally, selecting Exit Game will close the application.</p>
						<h5><u>How The Game Was Made: </u></h5>
						<p>I developed this game using the Unity Engine, coding entirely in C#. The complete project is composed of four Unity Scene files, nine C# scripts, and a single UI animation that’s consistently reused across all interactive buttons. The most code-intensive scenes are the GameScene, which handles all the core gameplay logic, and the LeaderboardScene, which manages data storage and display.</p>	
						<p>In the GameScene, I approached the coding of the disks and rods differently. The rods and board were hardcoded to create defined snap points and contain colliders to prevent disks from falling off or getting lost. In contrast, the disks were generated dynamically using a single prefab, as the number of disks depends on the player’s selection at the start of the game. This flexible design eliminated the need for creating separate scenes for each disk amount, as the prefab is simply instantiated multiple times based on the chosen difficulty.</p>	
						<p>The rods were programmed collectively to enforce the core rules of the game, which are that only the topmost disk on any rod can be moved, and larger disks cannot be placed on top of smaller ones. These rules were implemented using raycasting, mouse click detection, and stack-based logic, where each rod maintained a list of the disks it held. This allowed the game to easily validate legal moves and reject invalid ones in real-time.</p>	
						<p>In addition to gameplay mechanics, the GameScene includes functionality to track and save the player's completion time and number of moves. At the end of each session, this information is recorded in a local .json file. The LeaderboardScene reads from these files and presents a list of past attempts, sorted by the fewest number of moves for each disk difficulty. This encourages players to improve their skills and compete against their own best records. I wrote custom methods to initialize, write to, and load the JSON data, ensuring persistence across play sessions.</p>	
						<p>To enhance the user interface and maintain consistency, all the interactive buttons across different scenes were animated using a single shared animation file, giving the UI a polished and cohesive look.</p>	
						<p>For being the second project I have ever created using Unity after learning it within 2 weeks, I was very proud of what I had acomplished and even more excited to continue my journey in learning new languages and tools that would help me develop as a programmer and progress my career.</p>`	
						
  },
    project3: {
    images: ['Assets/FB1.png', 'Assets/FB2.png', 'Assets/FB3.png'],
    details: `<h3>Flappy Bird Remake</h3>
						<h4><u>Frameworks/Tools/Languages Used:</u></h4>
						<p>Unity Engine, C#</p><br>
						<h4><u>Project Details:</u></h4>
						<p>This is my remake of the timeless game, Flappy Bird. Flappy Bird is an endless runner game that is fully controlled by one button, in this case, the space bar. The game aims to control and direct the bird as it flies through the gaps in the pipes. For each pipe you successfully pass, you get one point. Ultimately, there is no end goal in this game; it is simply something to pass the time, and it does it very well.</p>
						<h5><u>How The Game Works: </u></h5>
						<p>When the game is launched, the user is presented with a simple and intuitive Main Menu containing two options: Play Game and Exit Game. Selecting Play Game immediately starts the game, allowing the player to begin their attempt and aim for the highest possible score by successfully passing through as many pipes as they can. Choosing Exit Game will close the application.</p>
						<p>During gameplay, if the player collides with a pipe or moves out of the screen boundaries, the game ends. At this point, the user can choose to either play again, which reloads the game scene and restarts their attempt, or return to the Main Menu to exit or restart at their discretion.</p>
						<h5><u>How The Game Was Made: </u></h5>
						<p>This project was my first attempt at developing a game using the Unity Engine. I chose to recreate Flappy Bird because I believed it would be a valuable exercise to help me become familiar with the tools and workflows within Unity. The game is structured across two Unity scene files, six C# scripts, and uses one pipe prefab for dynamic spawning.</p>	
						<p>The MainFunctionalityScript and MiddleScript handle the game's basic UI interactions, such as navigating between scenes. Additionally, MiddleScript contains key collision logic to detect whether the bird has collided with a pipe or successfully passed through it, determining whether the bird is alive and if a point should be awarded.</p>	
						<p>The LogicManagerScript manages scorekeeping. It contains a function that increments the player's score each time the bird successfully navigates through a pipe gap.</p>	
						<p>The PipeSpawnScript and PipeMoveScript work together to handle pipe behavior. The PipeSpawnScript, attached to the PipeSpawn GameObject, is responsible for spawning pipes at varied vertical positions and set intervals. Meanwhile, the PipeMoveScript—attached to the pipe prefab—controls the horizontal movement of the pipes and destroys them once they exit the screen, preventing performance issues from excess unused objects.</p>	
						<p>Finally, the BirdScript manages all bird-related behaviors. This includes applying flap mechanics in response to spacebar input, checking screen bounds to determine if the bird should "die" when it flies too high or low, and handling interactions with pipes to either trigger score updates or the game-over sequence.</p>`	

  }
};

function openModal(projectKey) {
  const modal = document.getElementById('modal');
  const screenshots = document.getElementById('modalScreenshots');
  const details = document.getElementById('modalDetails');

  const project = projects[projectKey];
  currentImageSet = project.images; // Set global image set

  screenshots.innerHTML = project.images.map((src, index) => 
    `<img src="${src}" alt="Project Screenshot" onclick="openImageViewer(${index})">`
  ).join('');
  
  details.innerHTML = project.details;
  modal.style.display = 'flex';
}


function closeModal(event) {
  if (event.target.id === 'modal' || event.target.className === 'close-btn') {
    document.getElementById('modal').style.display = 'none';
  }
}

let currentImageIndex = 0;
let currentImageSet = [];

function openImageViewer(index) {
  currentImageIndex = index;
  const viewer = document.getElementById("imageViewer");
  const fullImage = document.getElementById("fullImage");
  fullImage.src = currentImageSet[currentImageIndex];
  viewer.style.display = "flex";
}

function closeImageViewer() {
  document.getElementById("imageViewer").style.display = "none";
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + currentImageSet.length) % currentImageSet.length;
  document.getElementById("fullImage").src = currentImageSet[currentImageIndex];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentImageSet.length;
  document.getElementById("fullImage").src = currentImageSet[currentImageIndex];
}

function openAboutModal() {
  document.getElementById("aboutModal").style.display = "flex";
}

function closeAboutModal() {
  document.getElementById("aboutModal").style.display = "none";
}


