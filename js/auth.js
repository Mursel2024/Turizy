
function switchTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabId).classList.add('active');
    
    // Update tab styling
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
}
const form= document.querySelector("form");
form.addEventListener("submit",(e)=>{ 
    e.preventDefault();
}
)


