// Select the element with the class 'insert' to display key press information
const insert = document.querySelector('.insert'); 

// Add an event listener for the 'keydown' event on the window object
window.addEventListener('keydown', (e) => {
  // Update the inner HTML of the insert element to display the pressed key information
  insert.innerHTML = `
    <div class="color">
      <table>
        <tr>
          <th>Key</th>
          <th>Keycode</th> 
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td> // Display 'Space' if the spacebar is pressed; otherwise, display the actual key
          <td>${e.keyCode}</td> // Display the numerical key code of the pressed key
          <td>${e.code}</td> // Display the code representing the physical key on the keyboard
        </tr>
      </table>
    </div>
  `;
});
