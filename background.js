// Declare a variable to store the interval ID
let intervalId;

// Listen for messages from the popup
chrome.runtime.onMessage.addListener
(
    // Listener function
    function(request, sender, sendResponse)
    {
        if (request.type === 'start')
            startReminder(request.interval);
        else if (request.type === 'stop')
            stopReminder();
    } 
);

function startReminder(interval)
{
    // Clear any existing interval
    stopReminder();

    // Send a message to the user
    sendVocalMessage();

    // Set a new reminder
    setReminder(sendVocalMessage, interval * 60 * 1000);
}

function stopReminder()
{
    clearInterval(intervalId);
    // Use the chrome.tts API to send the message
    chrome.tts.speak
    (
        'Thank you for using this extension. May your posture improve with time!',
        {
            rate        : 0.9,
            voiceName   : 'Google UK English Female' //en-GB-News-L
        }
    );
}

function sendVocalMessage()
{
    // Use the chrome.tts API to send the message
    chrome.tts.speak
    (
        'Don\'t forget to sit well on your chair if you wanna avoid backpain !',
        {
            rate        : 0.9,
            voiceName   : 'Google UK English Female' //en-GB-News-L
        }
    );
}

function setReminder(callback, interval)
{
    intervalId = setInterval(callback, interval);
}

