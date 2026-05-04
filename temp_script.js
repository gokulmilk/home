
        // --- Core State ---
        let appState = {
            currentUser: null,
            currentShift: 'morning',
            farmers: [],
            entries: [],
            collFilter: 'remaining',
            tempQty: "0",
            activeFarmer: null,
            costPerFat: 0,
            language: 'hi', // Default Hindi
            notificationsEnabled: true
        };

        const translations = {
            en: {
                home: "Home",
                entry: "Entry",
                ledger: "Ledger",
                farmers: "Farmers",
                settings: "Settings",
                profile: "Profile",
                logout: "Logout from Account",
                morning: "Morning",
                evening: "Evening",
                morning_shift: "Morning Shift",
                evening_shift: "Evening Shift",
                remaining: "Remaining",
                completed: "Completed",
                total_litres: "TOTAL LITRES",
                avg_fat: "AVG FAT %",
                total_payout: "TOTAL PAYOUT",
                export_excel: "Export to Excel",
                add_farmer: "New Farmer",
                farmer_name: "Farmer Name",
                add_to_list: "Add to Master List",
                save_collection: "Save Collection",
                dark_mode: "Dark Mode",
                notifications: "Notifications",
                language: "Language",
                security: "Security & Privacy",
                help: "Help Center",
                daily_records: "Daily Records & Reports",
                manage_list: "Manage Master List",
                click_for_report: "Click for Report",
                rate_setting: "Rate Setting",
                cost_per_fat: "Cost per 1.0 Fat (%)",
                welcome_back: "Welcome back",
                good_morning: "Good Morning",
                good_afternoon: "Good Afternoon",
                good_evening: "Good Evening",
                ready_start: "Ready to start?",
                keep_going: "Keep going!",
                shift_complete: "Shift Complete!",
                recent_activity: "Recent Activity",
                view_all: "View All",
                farmer_report: "Farmer Report",
                monthly_statement: "Monthly Statement",
                full_name: "Full Name",
                email: "Email Address",
                mobile: "Mobile Number",
                save_changes: "Save Changes",
                login: "Login",
                signup: "Sign Up",
                welcome_to: "Welcome to",
                slogan: "The Smartest way to manage your Dairy business",
                already_account: "Already have an account?",
                need_account: "Need an account?",
                password: "Password",
                app_preferences: "App preferences",
                total_collected: "Total Collected",
                new_entry: "New Entry",
                view_ledger: "View Ledger",
                manage_account: "Manage your account settings",
                your_name: "Your Name",
                your_email: "Your Email",
                your_mobile: "Your Mobile",
                mobile_or_email: "Mobile Number or Email",
                mobile_or_email_placeholder: "Enter mobile or email",
                password_placeholder: "Enter your password",
                full_name_placeholder: "Your full name",
                mobile_placeholder: "10-digit mobile number",
                email_placeholder: "you@example.com",
                password_placeholder_signup: "Create a password (min 6 chars)",
                date: "Date",
                farmer: "Farmer",
                shift: "Shift",
                qty: "Qty",
                fat: "Fat",
                amt: "Amount",
                morning: "Morning",
                evening: "Evening",
                today_collection: "Today's Collection",
                total: "Total",
                avg: "Average"
            },
            hi: {
                home: "होम",
                entry: "एंट्री",
                ledger: "लेजर",
                farmers: "किसान",
                settings: "सेटिंग्स",
                profile: "प्रोफ़ाइल",
                logout: "खाते से लॉगआउट करें",
                morning: "सुबह",
                evening: "शाम",
                morning_shift: "सुबह की शिफ्ट",
                evening_shift: "शाम की शिफ्ट",
                remaining: "बाकी",
                completed: "पूरा हुआ",
                total_litres: "कुल लीटर",
                avg_fat: "औसत फैट %",
                total_payout: "कुल भुगतान",
                export_excel: "एक्सेल में एक्सपोर्ट करें",
                add_farmer: "नया किसान",
                farmer_name: "किसान का नाम",
                add_to_list: "मास्टर लिस्ट में जोड़ें",
                save_collection: "कलेक्शन सेव करें",
                dark_mode: "डार्क मोड",
                notifications: "नोटिफिकेशन",
                language: "भाषा",
                security: "सुरक्षा और गोपनीयता",
                help: "सहायता केंद्र",
                daily_records: "दैनिक रिकॉर्ड और रिपोर्ट",
                manage_list: "मास्टर लिस्ट प्रबंधित करें",
                click_for_report: "रिपोर्ट के लिए क्लिक करें",
                rate_setting: "रेट सेटिंग",
                cost_per_fat: "प्रति 1.0 फैट (%) लागत",
                welcome_back: "वापसी पर स्वागत है",
                good_morning: "सुप्रभात",
                good_afternoon: "नमस्कार",
                good_evening: "शुभ संध्या",
                ready_start: "शुरू करने के लिए तैयार हैं?",
                keep_going: "जारी रखें!",
                shift_complete: "शिफ्ट पूरी हुई!",
                recent_activity: "हाल की गतिविधि",
                view_all: "सभी देखें",
                farmer_report: "किसान रिपोर्ट",
                monthly_statement: "मासिक विवरण",
                full_name: "पूरा नाम",
                email: "ईमेल पता",
                mobile: "मोबाइल नंबर",
                save_changes: "बदलाव सेव करें",
                login: "लॉगिन",
                signup: "साइन अप",
                welcome_to: "स्वागत है",
                slogan: "डेयरी व्यवसाय प्रबंधित करने का सबसे स्मार्ट तरीका",
                already_account: "पहले से ही खाता है?",
                need_account: "खाते की आवश्यकता है?",
                password: "पासवर्ड",
                app_preferences: "ऐप प्राथमिकताएं",
                total_collected: "कुल संग्रहित",
                new_entry: "नई प्रविष्टि",
                view_ledger: "लेजर देखें",
                manage_account: "अपने खाता सेटिंग्स प्रबंधित करें",
                your_name: "आपका नाम",
                your_email: "आपका ईमेल",
                your_mobile: "आपका मोबाइल",
                mobile_or_email: "मोबाइल नंबर या ईमेल",
                mobile_or_email_placeholder: "मोबाइल या ईमेल दर्ज करें",
                password_placeholder: "अपना पासवर्ड दर्ज करें",
                full_name_placeholder: "आपका पूरा नाम",
                mobile_placeholder: "10 अंकों का मोबाइल नंबर",
                email_placeholder: "you@example.com",
                password_placeholder_signup: "पासवर्ड बनाएं (कम से कम 6 अक्षर)",
                date: "दिनांक",
                farmer: "किसान",
                shift: "शिफ्ट",
                qty: "मात्रा",
                fat: "फैट",
                amt: "रकम",
                morning: "सुबह",
                evening: "शाम",
                today_collection: "आज का कलेक्शन",
                total: "कुल",
                avg: "औसत"
            }
        };

        function translateApp() {
            const lang = appState.language || 'hi';
            const dict = translations[lang];

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dict[key]) {
                    if (el.tagName === 'INPUT' && el.placeholder) {
                        el.placeholder = dict[key];
                    } else {
                        el.innerText = dict[key];
                    }
                }
            });

            // Update language display in settings
            const langDisplay = document.getElementById('current-lang-display');
            if (langDisplay) langDisplay.innerText = lang === 'hi' ? 'Hindi' : 'English';
        }

        const BASE_URL = 'https://gokul-3il7.onrender.com/api';

        async function apiFetch(endpoint, options = {}) {
            const token = sessionStorage.getItem('dm_pro_token');
            const headers = {
                'Content-Type': 'application/json',
                ...options.headers
            };
            if (token) headers['x-auth-token'] = token;

            try {
                const res = await fetch(`${BASE_URL}${endpoint}`, { ...options, headers });
                const data = await res.json();
                if (!res.ok) throw new Error(data.msg || 'Something went wrong');
                return data;
            } catch (err) {
                console.error("API Error:", err);
                throw err;
            }
        }

        // --- Init ---
        async function init() {
            const token = sessionStorage.getItem('dm_pro_token');
            const savedUser = sessionStorage.getItem('dm_pro_session');

            if (token && savedUser) {
                appState.currentUser = JSON.parse(savedUser);
                showMainApp(true);
                await refreshData();
            }

            updateClock();
            autoShift();

            // Set ledger filter to today by default
            const ledgerDate = document.getElementById('ledger-date-filter');
            if (ledgerDate) ledgerDate.value = getTodayKey();

            translateApp();
        }

        async function refreshData() {
            try {
                const farmers = await apiFetch('/farmers');
                const entries = await apiFetch(`/entries?date=${getTodayKey()}`);
                appState.farmers = farmers;
                appState.entries = entries;
                renderHome();
                renderCollection();
                renderFarmers();
            } catch (err) {
                console.error("Failed to refresh data", err);
            }
        }

        function saveData() {
            // Local storage only for non-critical temporary state if needed
            // Critical data is now handled by API
        }

        async function updateGlobalRate() {
            const val = parseFloat(document.getElementById('global-cost-per-fat').value);
            try {
                await apiFetch('/auth/profile', {
                    method: 'PUT',
                    body: JSON.stringify({ costPerFat: val })
                });
                appState.costPerFat = val;
                alert("Global rate updated!");
            } catch (err) {
                alert(err.message);
            }
        }

        // --- Auth ---
        function getUsers() { return []; } // Legacy
        function saveUsers() { } // Legacy

        function switchAuthTab(tab) {
            const isLogin = tab === 'login';
            document.getElementById('tab-login-btn').classList.toggle('active', isLogin);
            document.getElementById('tab-signup-btn').classList.toggle('active', !isLogin);
            document.getElementById('form-login').classList.toggle('active', isLogin);
            document.getElementById('form-signup').classList.toggle('active', !isLogin);
        }

        function togglePass(inputId, btn) {
            const input = document.getElementById(inputId);
            const icon = btn.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                icon.className = 'bi bi-eye-slash';
            } else {
                input.type = 'password';
                icon.className = 'bi bi-eye';
            }
        }

        async function handleLogin(e) {
            e.preventDefault();
            const identifier = document.getElementById('login-identifier').value.trim();
            const password = document.getElementById('login-password').value;

            try {
                const data = await apiFetch('/auth/login', {
                    method: 'POST',
                    body: JSON.stringify({ identifier, password })
                });

                sessionStorage.setItem('dm_pro_token', data.token);
                sessionStorage.setItem('dm_pro_session', JSON.stringify(data.user));
                appState.currentUser = data.user;
                appState.costPerFat = data.user.costPerFat || 0;
                appState.language = data.user.language || 'hi';
                appState.notificationsEnabled = data.user.notificationsEnabled;

                showMainApp();
                await refreshData();
            } catch (err) {
                showAuthError('login-password', err.message);
            }
        }

        async function handleSignup(e) {
            e.preventDefault();
            const name = document.getElementById('signup-name').value.trim();
            const mobile = document.getElementById('signup-mobile').value.trim();
            const email = document.getElementById('signup-email').value.trim().toLowerCase();
            const password = document.getElementById('signup-password').value;

            try {
                const data = await apiFetch('/auth/signup', {
                    method: 'POST',
                    body: JSON.stringify({ name, mobile, email, password })
                });

                sessionStorage.setItem('dm_pro_token', data.token);
                sessionStorage.setItem('dm_pro_session', JSON.stringify(data.user));
                appState.currentUser = data.user;

                showMainApp();
                await refreshData();
            } catch (err) {
                showAuthError('signup-email', err.message);
            }
        }

        function showAuthError(inputId, msg) {
            const input = document.getElementById(inputId);
            input.style.borderColor = '#EF4444';
            input.focus();
            // Remove any old error
            const old = input.parentElement.parentElement.querySelector('.auth-error-msg');
            if (old) old.remove();
            // Add error
            const err = document.createElement('p');
            err.className = 'auth-error-msg';
            err.style.cssText = 'color:#EF4444; font-size:0.78rem; font-weight:600; margin-top:-4px;';
            err.textContent = msg;
            input.parentElement.parentElement.appendChild(err);
            setTimeout(() => { input.style.borderColor = ''; err.remove(); }, 3500);
        }

        function showMainApp(immediate = false) {
            const loginView = document.getElementById('view-login');
            const brandBar = document.getElementById('global-brand-bar');

            if (immediate) {
                loginView.style.display = 'none';
                brandBar.style.display = 'flex';
            } else {
                loginView.style.opacity = '0';
                loginView.style.transition = 'opacity 0.4s ease';
                setTimeout(() => {
                    loginView.style.display = 'none';
                    brandBar.style.display = 'flex';
                }, 400);
            }
            document.getElementById('app-nav').style.display = 'flex';
            switchView('home');

            // Personalize greeting
            if (appState.currentUser && appState.currentUser.name) {
                const hour = new Date().getHours();
                let timeMsg = "Morning";
                if (hour >= 12 && hour < 17) timeMsg = "Afternoon";
                if (hour >= 17) timeMsg = "Evening";
                document.getElementById('greeting-msg').innerHTML = `Good ${timeMsg},<br>${appState.currentUser.name.split(' ')[0]}!`;
            }
        }

        function handleLogout() {
            if (confirm("Are you sure you want to logout?")) {
                document.getElementById('global-brand-bar').style.display = 'none';
                sessionStorage.removeItem('dm_pro_session');
                location.reload();
            }
        }

        // --- Navigation ---
        function switchView(viewId) {
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            const targetView = document.getElementById('view-' + viewId);
            if (targetView) targetView.classList.add('active');

            // Update Top Bar Action Button
            const actionBtn = document.getElementById('top-bar-action');
            const actionIcon = document.getElementById('top-bar-icon');

            if (viewId === 'profile') {
                actionBtn.style.display = 'flex';
                actionBtn.onclick = () => switchView('settings');
                actionIcon.className = 'bi bi-gear-fill';
            } else if (viewId === 'settings' || viewId === 'login') {
                actionBtn.style.display = 'none';
            } else {
                actionBtn.style.display = 'flex';
                actionBtn.onclick = () => switchView('profile');
                actionIcon.className = 'bi bi-person-circle';
            }

            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            const navItems = document.querySelectorAll('.nav-item');

            // Highlight nav icons only for main screens
            if (viewId === 'home') navItems[0].classList.add('active');
            if (viewId === 'collection') navItems[1].classList.add('active');
            if (viewId === 'ledger') navItems[2].classList.add('active');
            if (viewId === 'farmers') navItems[3].classList.add('active');

            renderView(viewId);
        }

        function renderView(viewId) {
            if (viewId === 'home') renderHome();
            if (viewId === 'collection') renderCollection();
            if (viewId === 'ledger') renderLedger();
            if (viewId === 'farmers') renderFarmers();
            if (viewId === 'profile') renderProfile();
            if (viewId === 'settings') renderSettings();
            if (viewId === 'farmer-report') renderFarmerReport();
        }

        function renderProfile() {
            if (appState.currentUser) {
                document.getElementById('edit-profile-name').value = appState.currentUser.name;
                document.getElementById('edit-profile-email').value = appState.currentUser.email || '';
                document.getElementById('edit-profile-mobile').value = appState.currentUser.mobile || '';
                document.getElementById('profile-initials').innerText = appState.currentUser.name.charAt(0).toUpperCase();
            }
        }

        async function updateProfile() {
            const name = document.getElementById('edit-profile-name').value.trim();
            const email = document.getElementById('edit-profile-email').value.trim();
            const mobile = document.getElementById('edit-profile-mobile').value.trim();

            try {
                const data = await apiFetch('/auth/profile', {
                    method: 'PUT',
                    body: JSON.stringify({ name, email, mobile })
                });

                appState.currentUser = { name: data.name, email: data.email, mobile: data.mobile };
                sessionStorage.setItem('dm_pro_session', JSON.stringify(appState.currentUser));

                alert("Profile updated successfully!");
                renderProfile();
            } catch (err) {
                alert(err.message);
            }
        }

        function renderSettings() {
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            const themeToggle = document.getElementById('settings-theme-toggle');
            if (themeToggle) {
                themeToggle.className = isDark ? 'bi bi-toggle-on' : 'bi bi-toggle-off';
                themeToggle.style.color = isDark ? 'var(--primary)' : 'var(--text-sub)';
            }

            const notifToggle = document.getElementById('settings-notif-toggle');
            if (notifToggle) {
                notifToggle.className = appState.notificationsEnabled ? 'bi bi-toggle-on' : 'bi bi-toggle-off';
                notifToggle.style.color = appState.notificationsEnabled ? 'var(--primary)' : 'var(--text-sub)';
            }

            const langDisplay = document.getElementById('current-lang-display');
            if (langDisplay) {
                langDisplay.innerText = appState.language === 'hi' ? 'Hindi' : 'English';
            }
        }

        function toggleNotifications() {
            appState.notificationsEnabled = !appState.notificationsEnabled;
            saveData();
            renderSettings();
            if (appState.notificationsEnabled) {
                alert("Notifications Enabled!");
            }
        }

        function toggleLanguage() {
            appState.language = appState.language === 'hi' ? 'en' : 'hi';
            saveData();
            translateApp();
            renderSettings();
        }

        // --- Rendering Logic ---

        function renderHome() {
            const today = getTodayKey();
            const todayEntries = appState.entries; // Already filtered for today in refreshData

            let totalQty = 0;
            todayEntries.forEach(e => totalQty += e.qty);

            const activeCount = appState.farmers.filter(f => f.active).length;
            const doneCount = todayEntries.length;

            document.getElementById('home-total-qty').innerText = totalQty.toFixed(1);
            document.getElementById('home-collection-count').innerText = `${doneCount} of ${activeCount} Farmers Done`;

            const statusMsg = document.getElementById('home-total-status');
            if (doneCount === 0) statusMsg.innerText = "Ready to start?";
            else if (doneCount < activeCount) statusMsg.innerText = "Keep going!";
            else statusMsg.innerText = "Shift Complete!";

            // Recent List
            const list = document.getElementById('recent-list');
            list.innerHTML = '';
            todayEntries.slice().reverse().slice(0, 5).forEach(e => {
                const farmer = e.farmer; // Populated by backend
                const item = document.createElement('div');
                item.className = 'list-item';
                item.innerHTML = `
                    <div class="meta">
                        <div class="icon-box"><i class="bi bi-droplet-fill"></i></div>
                        <div class="details">
                            <h4>${farmer ? farmer.name : 'Unknown'}</h4>
                            <p>${e.shift === 'morning' ? 'Morning' : 'Evening'}</p>
                        </div>
                    </div>
                    <div class="val-badge">${e.qty} L</div>
                `;
                list.appendChild(item);
            });
        }

        function renderCollection() {
            const today = getTodayKey();
            const list = document.getElementById('collection-list');
            list.innerHTML = '';

            if (!appState.farmers || appState.farmers.length === 0) {
                list.innerHTML = `<p style="text-align: center; padding: 40px; color: var(--text-sub);">No farmers found. Add some in the Farmers tab.</p>`;
                return;
            }

            const activeFarmers = appState.farmers.filter(f => f.active);
            const lang = appState.language || 'hi';
            const dict = translations[lang];

            activeFarmers.forEach(f => {
                // Find if this farmer already has an entry for today/shift
                const done = appState.entries.find(e => {
                    const farmerId = e.farmer?._id || e.farmer;
                    return farmerId === f._id && e.date === today && e.shift === appState.currentShift;
                });

                if (appState.collFilter === 'remaining' && done) return;
                if (appState.collFilter === 'done' && !done) return;

                const item = document.createElement('div');
                item.className = 'list-item';
                item.onclick = () => openCollectionSheet(f);
                item.innerHTML = `
                    <div class="meta">
                        <div class="icon-box"><i class="bi ${done ? 'bi-check-all' : 'bi-person-fill'}"></i></div>
                        <div class="details">
                            <h4>${f.name}</h4>
                            <p>${dict.today_collection || "Today's Collection"}</p>
                        </div>
                    </div>
                    ${done ? `<div class="val-badge" style="background: rgba(16, 185, 129, 0.1); color: var(--success);">${done.qty} L</div>` : '<i class="bi bi-chevron-right" style="color: var(--text-sub);"></i>'}
                `;
                list.appendChild(item);
            });

            if (list.innerHTML === '') {
                const msg = appState.collFilter === 'remaining' ? 'All farmers completed!' : 'No entries done yet.';
                list.innerHTML = `<p style="text-align: center; padding: 40px; color: var(--text-sub);">${msg}</p>`;
            }
        }

        async function renderLedger() {
            const lang = appState.language || 'hi';
            const dict = translations[lang];
            const body = document.getElementById('ledger-body');
            body.innerHTML = '';

            const dateInput = document.getElementById('ledger-date-filter');
            if (!dateInput.value) dateInput.value = getTodayKey();
            const dateFilter = dateInput.value;

            try {
                const filtered = await apiFetch(`/entries?date=${dateFilter}`);
                filtered.reverse().forEach(e => {
                    const row = document.createElement('tr');
                    // Format date based on language
                    const dateObj = new Date(e.date);
                    const dateDisplay = dateObj.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', { day: '2-digit', month: 'short' });
                    const shiftDisplay = dict[e.shift] || e.shift;

                    row.innerHTML = `
                        <td>${dateDisplay}</td>
                        <td><b>${e.farmer ? e.farmer.name : 'Unknown'}</b></td>
                        <td><span class="badge ${e.shift === 'morning' ? 'badge-m' : 'badge-e'}">${shiftDisplay}</span></td>
                        <td>${e.qty} L</td>
                        <td>
                            <span id="fat-val-${e._id}">${e.fat ? e.fat + '%' : '-'}</span>
                            <button class="edit-fat-btn" onclick="editFat('${e._id}')"><i class="bi bi-pencil"></i></button>
                        </td>
                    `;
                    body.appendChild(row);
                });

                if (filtered.length === 0) {
                    body.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 40px;">${lang === 'hi' ? 'कोई प्रविष्टि नहीं मिली' : 'No entries found'}</td></tr>`;
                }
            } catch (err) {
                console.error(err);
            }
        }

        function renderFarmers() {
            const list = document.getElementById('master-farmer-list');
            list.innerHTML = '';
            appState.farmers.forEach(f => {
                const item = document.createElement('div');
                item.className = 'list-item';
                item.style.padding = '12px 16px';
                item.innerHTML = `
                    <div class="meta" onclick="openFarmerReport('${f._id}')" style="cursor: pointer; flex: 1; display: flex; align-items: center; gap: 12px;">
                        <div class="icon-box"><i class="bi bi-person"></i></div>
                        <div class="details">
                            <h4 style="margin:0; font-size: 1rem;">${f.name}</h4>
                            <p style="margin:0; font-size: 0.75rem; color: var(--text-sub);">${f.mobile || ''}</p>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <button class="delete-btn" onclick="event.stopPropagation(); deleteFarmer('${f._id}')">
                            <i class="bi bi-trash3"></i>
                        </button>
                        <div class="switch-box" onclick="event.stopPropagation(); toggleFarmer('${f._id}')" style="padding: 10px; cursor: pointer; display: flex; align-items: center;">
                            <i class="bi ${f.active ? 'bi-toggle-on' : 'bi-toggle-off'}" 
                               style="font-size: 2rem; color: ${f.active ? 'var(--primary)' : '#cbd5e1'}; transition: all 0.2s;"></i>
                        </div>
                    </div>
                `;
                list.appendChild(item);
            });
        }

        // --- Actions ---

        function openCollectionSheet(farmer) {
            appState.activeFarmer = farmer;
            appState.tempQty = "0";
            document.getElementById('sheet-farmer-name').innerText = farmer.name;
            document.getElementById('sheet-farmer-meta').innerText = (appState.currentShift === 'morning' ? 'Morning Shift' : 'Evening Shift') + ' | ' + farmer.fat + '% Avg Fat';
            updateSheetDisplay();
            openSheet('sheet-entry');
        }

        function kPress(val) {
            if (val === 'DEL') {
                appState.tempQty = appState.tempQty.length > 1 ? appState.tempQty.slice(0, -1) : "0";
            } else if (val === '.') {
                if (!appState.tempQty.includes('.')) appState.tempQty += ".";
            } else {
                if (appState.tempQty === "0") appState.tempQty = val;
                else appState.tempQty += val;
            }
            updateSheetDisplay();
        }

        function qtyAdjust(adj) {
            let current = parseFloat(appState.tempQty);
            current = Math.max(0, current + adj);
            appState.tempQty = current.toString();
            updateSheetDisplay();
        }

        function updateSheetDisplay() {
            document.getElementById('display-qty').innerText = appState.tempQty;
        }

        async function confirmEntry() {
            const qty = parseFloat(appState.tempQty);
            if (qty <= 0) return alert("Enter valid quantity");

            const today = getTodayKey();

            try {
                await apiFetch('/entries', {
                    method: 'POST',
                    body: JSON.stringify({
                        farmerId: appState.activeFarmer._id,
                        qty: qty,
                        fat: appState.activeFarmer.fat, // Use farmer's default fat
                        shift: appState.currentShift,
                        date: today
                    })
                });

                closeSheets();
                await refreshData();
            } catch (err) {
                alert(err.message);
            }
        }

        function openFarmerReport(id) {
            appState.activeFarmer = appState.farmers.find(f => f._id === id);
            switchView('farmer-report');
        }

        async function renderFarmerReport() {
            const lang = appState.language || 'hi';
            const dict = translations[lang];
            const f = appState.activeFarmer;
            if (!f) return;

            document.getElementById('report-farmer-name').innerText = f.name;
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();
            const monthName = now.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', { month: 'short' });
            document.getElementById('report-month-year').innerText = now.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', { month: 'long', year: 'numeric' });

            const head = document.getElementById('farmer-report-matrix-head');
            const body = document.getElementById('farmer-report-matrix-body');

            // Header Row
            head.innerHTML = `
                <tr>
                    <th style="border: 1px solid #ddd; padding: 10px; background: #f8fafc; position: sticky; top: 0;">${dict.date}</th>
                    <th style="border: 1px solid #ddd; padding: 10px; background: #f8fafc; position: sticky; top: 0;">${dict.shift}</th>
                    <th style="border: 1px solid #ddd; padding: 10px; background: #f8fafc; position: sticky; top: 0;">${dict.qty} (L)</th>
                    <th style="border: 1px solid #ddd; padding: 10px; background: #f8fafc; position: sticky; top: 0;">${dict.fat} (%)</th>
                    <th style="border: 1px solid #ddd; padding: 10px; background: #f8fafc; position: sticky; top: 0;">${dict.amt} (₹)</th>
                </tr>
            `;
            body.innerHTML = '';

            try {
                const entries = await apiFetch(`/entries/farmer/${f._id}`);
                const daysInMonth = new Date(year, month + 1, 0).getDate();

                let totalQty = 0;
                let totalFat = 0;
                let totalCost = 0;
                let fatEntries = 0;
                const ratePerFat = appState.costPerFat || 0;

                for (let d = 1; d <= daysInMonth; d++) {
                    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                    const displayDate = `${d} ${monthName}`;

                    ['morning', 'evening'].forEach(shift => {
                        const entry = entries.find(e => e.date === dateStr && e.shift === shift);
                        const row = document.createElement('tr');
                        row.style.background = shift === 'morning' ? '#fff' : '#f9fafb';

                        let qtyCell = '<td style="border: 1px solid #ddd; padding: 8px; color: #ccc;">-</td>';
                        let fatCell = '<td style="border: 1px solid #ddd; padding: 8px; color: #ccc;">-</td>';
                        let costCell = '<td style="border: 1px solid #ddd; padding: 8px; color: #ccc;">-</td>';

                        if (entry) {
                            totalQty += entry.qty;
                            qtyCell = `<td style="border: 1px solid #ddd; padding: 8px; font-weight: 700; color: var(--primary);">${entry.qty}</td>`;
                            if (entry.fat) {
                                totalFat += entry.fat;
                                fatEntries++;
                                fatCell = `<td style="border: 1px solid #ddd; padding: 8px; font-weight: 700; color: var(--accent);">${entry.fat}</td>`;
                                const cost = entry.qty * entry.fat * ratePerFat;
                                totalCost += cost;
                                costCell = `<td style="border: 1px solid #ddd; padding: 8px; font-weight: 700; color: #1D6F42;">${cost.toFixed(1)}</td>`;
                            }
                        }

                        row.innerHTML = `
                            <td style="border: 1px solid #ddd; padding: 8px; font-weight: 600;">${displayDate}</td>
                            <td style="border: 1px solid #ddd; padding: 8px; font-size: 0.8rem; color: var(--text-sub); text-transform: capitalize;">${dict[shift] || shift}</td>
                            ${qtyCell}
                            ${fatCell}
                            ${costCell}
                        `;
                        body.appendChild(row);
                    });
                }

                document.getElementById('report-total-qty').innerText = totalQty.toFixed(1) + ' L';
                document.getElementById('report-avg-fat').innerText = (fatEntries > 0 ? (totalFat / fatEntries).toFixed(1) : '0.0') + '%';
                document.getElementById('report-total-cost').innerText = '₹' + Math.round(totalCost);
            } catch (err) {
                console.error(err);
            }
        }

        function exportFarmerCSV() {
            const f = appState.activeFarmer;
            if (!f) return;

            const now = new Date();
            const monthName = now.toLocaleDateString('en-IN', { month: 'short' });
            const year = now.getFullYear();
            const month = now.getMonth();
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            const ratePerFat = appState.costPerFat || 0;
            let csvContent = "data:text/csv;charset=utf-8,Date,Shift,Qty (L),Fat (%),Amount (₹)\n";

            apiFetch(`/entries/farmer/${f._id}`).then(entries => {
                let totalQtyMonth = 0;
                let totalAmtMonth = 0;

                for (let d = 1; d <= daysInMonth; d++) {
                    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                    const displayDate = `${d} ${monthName}`;

                    ['morning', 'evening'].forEach(shift => {
                        const entry = entries.find(e => e.date === dateStr && e.shift === shift);
                        if (entry) {
                            const amt = entry.fat ? (entry.qty * entry.fat * ratePerFat) : 0;
                            totalQtyMonth += entry.qty;
                            totalAmtMonth += amt;
                            csvContent += `${displayDate},${shift},${entry.qty},${entry.fat || '-'},${amt.toFixed(2)}\n`;
                        } else {
                            csvContent += `${displayDate},${shift},-,-,-\n`;
                        }
                    });
                }

                // Add Total Row
                csvContent += `\nTOTAL,,${totalQtyMonth.toFixed(1)},,${totalAmtMonth.toFixed(2)}\n`;

                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", `${f.name.replace(/\s+/g, '_')}_Monthly_Statement.csv`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }

        async function editFat(entryId) {
            const newFat = prompt("Enter Fat %:");
            if (newFat === null) return;
            const fatVal = parseFloat(newFat);
            if (isNaN(fatVal)) return alert("Please enter a valid number");

            try {
                await apiFetch(`/entries/${entryId}`, {
                    method: 'PUT',
                    body: JSON.stringify({ fat: fatVal })
                });
                alert("Fat % updated successfully!");
                renderLedger();
            } catch (err) {
                alert(err.message);
            }
        }

        async function saveNewFarmer() {
            const name = document.getElementById('add-f-name').value.trim();
            const mobile = document.getElementById('add-f-mobile').value.trim();
            if (!name) return alert("Fill all fields");

            try {
                await apiFetch('/farmers', {
                    method: 'POST',
                    body: JSON.stringify({ name, mobile, fat: 0 })
                });
                closeSheets();
                await refreshData();
                document.getElementById('add-f-name').value = '';
                document.getElementById('add-f-mobile').value = '';
            } catch (err) {
                alert(err.message);
            }
        }

        async function toggleFarmer(id) {
            const f = appState.farmers.find(x => x._id === id);
            if (f) {
                const originalState = f.active;
                f.active = !f.active; // Optimistic update for speed
                renderFarmers(); 

                try {
                    await apiFetch(`/farmers/${id}`, {
                        method: 'PUT',
                        body: JSON.stringify({ active: f.active })
                    });
                    await refreshData();
                } catch (err) {
                    f.active = originalState; // Revert if failed
                    renderFarmers();
                    alert("Update failed: " + err.message);
                }
            }
        }

        async function deleteFarmer(id) {
            const f = appState.farmers.find(x => x._id === id);
            if (!f) return;
            
            if (confirm(`Are you sure you want to delete ${f.name}? This will remove them from the list.`)) {
                try {
                    await apiFetch(`/farmers/${id}`, {
                        method: 'DELETE'
                    });
                    await refreshData();
                } catch (err) {
                    alert(err.message);
                }
            }
        }

        async function generateMonthlyMaster() {
            const lang = appState.language || 'hi';
            const dict = translations[lang];
            switchView('master-register');
            const head = document.getElementById('register-head');
            const body = document.getElementById('monthly-master-body');

            const activeFarmers = appState.farmers.filter(f => f.active);
            if (activeFarmers.length === 0) return alert(lang === 'hi' ? "कोई सक्रिय किसान नहीं मिला।" : "No active farmers found.");

            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();
            const monthName = now.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', { month: 'short' });
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // Headers: Farmers
            let headerRow1 = `<tr><th rowspan="2" style="border: 1px solid #ddd; padding: 10px; background: #f8fafc; position: sticky; left: 0; z-index: 3;">${dict.date}</th>`;
            let headerRow2 = `<tr>`;
            
            activeFarmers.forEach(f => {
                headerRow1 += `<th colspan="2" style="border: 1px solid #ddd; padding: 10px; background: #f1f5f9; min-width: 100px;">${f.name}</th>`;
                headerRow2 += `<th style="border: 1px solid #ddd; padding: 4px; font-size: 0.6rem; background: #fff;">AM</th><th style="border: 1px solid #ddd; padding: 4px; font-size: 0.6rem; background: #fff;">PM</th>`;
            });
            headerRow1 += `</tr>`;
            headerRow2 += `</tr>`;
            head.innerHTML = headerRow1 + headerRow2;

            try {
                const entries = await apiFetch(`/entries?month=${month + 1}&year=${year}`);

                let bodyHtml = '';
                for (let d = 1; d <= daysInMonth; d++) {
                    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                    const displayDate = `${d} ${monthName}`;
                    
                    bodyHtml += `<tr><td style="border: 1px solid #ddd; padding: 10px; font-weight: 700; position: sticky; left: 0; background: #fff; z-index: 2; box-shadow: 2px 0 5px rgba(0,0,0,0.05); text-align: left;">${displayDate}</td>`;
                    
                    activeFarmers.forEach(f => {
                        const am = entries.find(e => e.farmer._id === f._id && e.date === dateStr && e.shift === 'morning');
                        const pm = entries.find(e => e.farmer._id === f._id && e.date === dateStr && e.shift === 'evening');

                        bodyHtml += `<td style="border: 1px solid #ddd; padding: 8px; color: ${am ? 'var(--primary)' : '#ccc'};">${am ? am.qty : '-'}</td>`;
                        bodyHtml += `<td style="border: 1px solid #ddd; padding: 8px; color: ${pm ? 'var(--accent)' : '#ccc'};">${pm ? pm.qty : '-'}</td>`;
                    });
                    bodyHtml += `</tr>`;
                }
                body.innerHTML = bodyHtml;
            } catch (err) {
                console.error(err);
                alert(lang === 'hi' ? "मासिक डेटा लोड करने में विफल" : "Failed to load monthly data");
            }
        }

        function updateShift(shift) {
            appState.currentShift = shift;
            document.getElementById('coll-shift-m').classList.toggle('active', shift === 'morning');
            document.getElementById('coll-shift-e').classList.toggle('active', shift === 'evening');
            document.getElementById('collection-meta').innerText = (shift === 'morning' ? 'Morning Shift' : 'Evening Shift') + ' | ' + new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long' });
            renderCollection();
        }

        function setCollectionFilter(filter) {
            appState.collFilter = filter;
            document.getElementById('tab-remaining').classList.toggle('active', filter === 'remaining');
            document.getElementById('tab-done').classList.toggle('active', filter === 'done');
            renderCollection();
        }

        // --- UI Utilities ---

        function openSheet(id) {
            document.getElementById('sheet-overlay').classList.add('active');
            document.getElementById(id).classList.add('active');
        }

        function closeSheets() {
            document.getElementById('sheet-overlay').classList.remove('active');
            document.querySelectorAll('.bottom-sheet').forEach(s => s.classList.remove('active'));
        }

        function toggleTheme() {
            const body = document.body;
            const current = body.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            body.setAttribute('data-theme', next);

            // Sync setting view if active
            const toggle = document.getElementById('settings-theme-toggle');
            if (toggle) {
                const isDark = next === 'dark';
                toggle.className = isDark ? 'bi bi-toggle-on' : 'bi bi-toggle-off';
                toggle.style.color = isDark ? 'var(--primary)' : 'var(--text-sub)';
            }
        }

        function updateClock() {
            const now = new Date();
            document.getElementById('live-date').innerText = now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
            const hour = now.getHours();
            let msg = "Good Morning!";
            if (hour >= 12 && hour < 17) msg = "Good Afternoon!";
            if (hour >= 17) msg = "Good Evening!";
            document.getElementById('greeting-msg').innerText = msg;
        }

        function autoShift() {
            const hour = new Date().getHours();
            if (hour >= 14) updateShift('evening');
            else updateShift('morning');
        }

        function getTodayKey() { return new Date().toISOString().split('T')[0]; }

        function generateMonthly() {
            alert("Generating Monthly Insights...");
            // Expansion point for PDF/Report generation
        }

        init();
    
