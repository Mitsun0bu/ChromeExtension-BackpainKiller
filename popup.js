// Get references to the start and stop buttons
const   startButton = document.getElementById('start-button');
const   stopButton  = document.getElementById('stop-button');

// Get reference to the interval input
const   intervalInput = document.getElementById('interval');

// Add event listeners to the start and stop buttons
startButton.addEventListener('click', startReminder);
stopButton.addEventListener('click', stopReminder);

// Start reminder function
function startReminder()
{
    // Disable the start button and enable the stop button
    startButton.disabled = true;
    stopButton.disabled  = false;
  
    // Get the interval value
    const interval = intervalInput.value;
  
    // Send a message to the background script to start the reminder
    chrome.runtime.sendMessage({ type: 'start', interval: interval });
}

// Stop reminder function
function stopReminder()
{
    // Enable the start button and disable the stop button
    startButton.disabled = false;
    stopButton.disabled = true;
  
    // Send a message to the background script to stop the reminder
    chrome.runtime.sendMessage({ type: 'stop' });
}