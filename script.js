const users = {};

        let currentUser = null;

        function registerUser() {
            const username = document.getElementById('regUsername').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;

            if (users[username]) {
                alert('Username already exist. Please choose another.');
                return;
            }

            const hashedPassword = hashPassword(password);

            users[username] = { username, email, password: hashedPassword };

            alert('Registration successful! You can now log in.');
            showLogin();
        }

        function loginUser() {
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            if (!users[username]) {
                alert('User not found. Please register.');
                return;
            }

            if (verifyPassword(password, users[username].password)) {
                currentUser = username;
                showSecuredPage();
            } else {
                alert('Incorrect password. Please try again.');
            }
        }

        function logout() {
            showLogin();
            document.getElementById('ContentPage').style.display = 'none';
        }

        function showRegistration() {
            document.getElementById('registrationForm').style.display = 'inline-block';
            document.getElementById('loginForm').style.display = 'none';
        }

        function showLogin() {
            document.getElementById('registrationForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'inline-block';
        }

        function showSecuredPage() {
            document.getElementById('registrationForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('ContentPage').style.display = 'block';
        }

        function showForgotPassword() {
            alert('Forgot Password feature not implemented.');
        }

        function hashPassword(password) {
            return password;
        }

        function verifyPassword(enteredPassword, storedPassword) {
            return enteredPassword === storedPassword;
        }