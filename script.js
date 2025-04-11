// AI Health Advisor - Complete JavaScript Solution
let healthHistory = [];
let currentAnalysis = {};

// Healthcare dataset
const healthcareDataset = [
  // Data from Healthcare_dataset.csv
  { name: "Bobby Jee", age: 50, gender: "Male", bloodType: "A+", condition: "Cancer", hospital: "assassins", insurance: "Matthew Sons and Blue Cots", billing: 1885.28, admissionDays: 328, admissionType: "Urgent", dischargeDate: "2/1/2024", medication: "Paracetate", testResults: "Normal" },
  { name: "Castle Titi", age: 60, gender: "Male", bloodType: "A+", condition: "Obesity", hospital: "assassins", insurance: "Susannah Kim Inc. Medicare", billing: 3863.33, admissionDays: 458, admissionType: "Emergency", dischargeDate: "Assassin", medication: "Ibuprofen", testResults: "Inconclusive" },
  { name: "Dahlry M.", age: 76, gender: "Female", bloodType: "O+", condition: "Obesity", hospital: "assassins", insurance: "Trifany M. Cook FC Aetna", billing: 2798.31, admissionDays: 205, admissionType: "Emergency", dischargeDate: "Assassin", medication: "Aspirin", testResults: "Normal" },
  { name: "Andrew W.", age: 28, gender: "Female", bloodType: "O+", condition: "Diabetes", hospital: "assassins", insurance: "New York Hemands Medicare", billing: 3790.73, admissionDays: 450, admissionType: "Elective", dischargeDate: "Assassin", medication: "Ibuprofen", testResults: "Abnormal" },
  { name: "Soffelius B", age: 49, gender: "Female", bloodType: "AB+", condition: "Cancer", hospital: "assassins", insurance: "Kathleen White-Walkers", billing: 1433.83, admissionDays: 488, admissionType: "Urgent", dischargeDate: "Assassin", medication: "Penicillin", testResults: "Abnormal" },
  { name: "JAMA KD", age: 38, gender: "Male", bloodType: "A+", condition: "Asthma", hospital: "Assassin", insurance: "Eyton-Me Marcus-H. Untiedris", billing: 4416.11, admissionDays: 589, admissionType: "Urgent", dischargeDate: "Assassin", medication: "Ibuprofen", testResults: "Normal" },
  { name: "Seokol G", age: 21, gender: "Female", bloodType: "AB+", condition: "Diabetes", hospital: "assassins", insurance: "Kelly Old Group Medicare", billing: 5830.87, admissionDays: 589, admissionType: "Emergency", dischargeDate: "Assassin", medication: "Paracetate", testResults: "Inconclusive" },
  { name: "Christina M.", age: 20, gender: "Female", bloodType: "A+", condition: "Cancer", hospital: "assassins", insurance: "Suzanne Terpett M.Cigna", billing: 45320.46, admissionDays: 277, admissionType: "Emergency", dischargeDate: "1/1/2022", medication: "Paracetate", testResults: "Inconclusive" },
  { name: "Jasmine L.", age: 50, gender: "Male", bloodType: "AB+", condition: "Asthma", hospital: "7/1/2020", insurance: "Dudar F.Sson Bird Organ", billing: 5019.22, admissionDays: 548, admissionType: "Elective", dischargeDate: "Assassin", medication: "Aspirin", testResults: "Abnormal" },
  { name: "Diabetics B", age: 58, gender: "Female", bloodType: "AB+", condition: "Cancer", hospital: "assassins", insurance: "Heather F.Bellah Untiedris", billing: 1974.63, admissionDays: 549, admissionType: "Elective", dischargeDate: "Assassin", medication: "Paracetate", testResults: "Inconclusive" },
  { name: "Umbrella L.", age: 72, gender: "Male", bloodType: "O+", condition: "Cancer", hospital: "assassins", insurance: "John Dun Schaefer Medicare", billing: 1257.68, admissionDays: 584, admissionType: "Urgent", dischargeDate: "Assassin", medication: "Paracetate", testResults: "Normal" },
  { name: "Isi Ashman M.", age: 35, gender: "Female", bloodType: "A+", condition: "Disease", hospital: "assassins", insurance: "Douglas Lopes-Bla Medicine", billing: 7999.97, admissionDays: 288, admissionType: "Urgent", dischargeDate: "5/1/2023", medication: "Uptior", testResults: "Inconclusive" },
  { name: "Conchell M.", age: 75, gender: "Female", bloodType: "A+", condition: "Diabetes", hospital: "assassins", insurance: "Kenneth Powers M.Cigna", billing: 4328.28, admissionDays: 334, admissionType: "Emergency", dischargeDate: "Assassin", medication: "Penicillin", testResults: "Abnormal" },
  { name: "Choe R'M.", age: 65, gender: "Female", bloodType: "AB+", condition: "Asthma", hospital: "assassins", insurance: "Rebecca Edwards Untiedris", billing: 3070.51, admissionDays: 350, admissionType: "Urgent", dischargeDate: "Assassin", medication: "Uptior", testResults: "Normal" },
  { name: "ISI Shook G", age: 44, gender: "Female", bloodType: "AB+", condition: "Obesity", hospital: "Assassins", insurance: "Robert's Monthly Co. Untiedris", billing: 4070.54, admissionDays: 182, admissionType: "Urgent", dischargeDate: "Assassin", medication: "Paracetate", testResults: "Normal" },
  { name: "IJAS AKBI", age: 40, gender: "Female", bloodType: "AB+", condition: "Obesity", hospital: "1/1/2023", insurance: "Maria Do Clinic with Blue Cots", billing: 2265.36, admissionDays: 349, admissionType: "Elective", dischargeDate: "Assassin", medication: "Aspirin", testResults: "Inconclusive" },
  { name: "Isi Takagi Yama", age: 30, gender: "Female", bloodType: "A+", condition: "Amheria", hospital: "Assassin", insurance: "Eric's Spec-Cervence Untiedris", billing: 4299.85, admissionDays: 114, admissionType: "Elective", dischargeDate: "Assassin", medication: "Paracetate", testResults: "Normal" },
  { name: "Isi Takagi Yama", age: 38, gender: "Male", bloodType: "AB+", condition: "Obesity", hospital: "3/9/2020", insurance: "Justin Kit Torres, an Actor", billing: 3740.67, admissionDays: 469, admissionType: "Urgent", dischargeDate: "4/1/2020", medication: "Paracetate", testResults: "Abnormal" },
  { name: "ULK BAK", age: 34, gender: "Female", bloodType: "A+", condition: "Hypotrex", hospital: "3/4/2021", insurance: "Justin Ma Houston Blue Cots", billing: 3884.92, admissionDays: 260, admissionType: "Elective", dischargeDate: "Assassin", medication: "Aspirin", testResults: "Abnormal" },
  { name: "AMAN KC", age: 60, gender: "Male", bloodType: "B+", condition: "Asthma", hospital: "Assassin", insurance: "Dennis & Hammond Ggan", billing: 2376.23, admissionDays: 465, admissionType: "Elective", dischargeDate: "Assassin", medication: "Penicillin", testResults: "Normal" },
  { name: "LIMOTHY L.", age: 57, gender: "Female", bloodType: "A+", condition: "Asthma", hospital: "Assassin", insurance: "Brian Smith Jones UC Blue Cots", billing: 4234.59, admissionDays: 118, admissionType: "Elective", dischargeDate: "7/1/2023", medication: "Aspirin", testResults: "Normal" },
  { name: "Diabetics B", age: 48, gender: "Male", bloodType: "B+", condition: "Asthma", hospital: "Assassin", insurance: "Gregory Williams-Aetna", billing: 1765.91, admissionDays: 255, admissionType: "Urgent", dischargeDate: "2/9/2020", medication: "Uptior", testResults: "Normal" },
  { name: "Kenish T.", age: 58, gender: "Female", bloodType: "O+", condition: "Amheria", hospital: "Assassin", insurance: "Vanessa Clark-MayAetna", billing: 5998.30, admissionDays: 327, admissionType: "Urgent", dischargeDate: "Assassin", medication: "Uptior", testResults: "Inconclusive" },
  { name: "Elite T.", age: 59, gender: "Male", bloodType: "A+", condition: "Asthma", hospital: "8/7/2021", insurance: "Donna Island Sons Aetna", billing: 2530.05, admissionDays: 118, admissionType: "Urgent", dischargeDate: "Assassin", medication: "Uptior", testResults: "Inconclusive" },

  // Data from Realthere_dataset.csv
  { name: "PAUL hfwt", age: 72, gender: "Female", bloodType: "AB+", condition: "Hypertension", hospital: "assassins", insurance: "Stephanie Wilson & Medicare", billing: 332113, admissionDays: 169, admissionType: "Emergency", dischargeDate: "6/8/2020", medication: "Paracetate", testResults: "Inconclusive" },
  { name: "PETER fft", age: 79, gender: "Male", bloodType: "AB+", condition: "Obesity", hospital: "assassins", insurance: "Angela C.Guerre & Medicare", billing: 197463, admissionDays: 160, admissionType: "Urgent", dischargeDate: "assassins", medication: "Aspirin", testResults: "Abnormal" },
  { name: "cairn ytkk", age: 81, gender: "Female", bloodType: "D", condition: "Asylum", hospital: "assassins", insurance: "Gregory, at home", billing: 428853, admissionDays: 140, admissionType: "Elective", dischargeDate: "assassins", medication: "Ibuprofen", testResults: "Normal" },
  { name: "rm kenkli", age: 84, gender: "Female", bloodType: "A+", condition: "Diabetes", hospital: "assassins", insurance: "James El Serrano & Uniteelite", billing: 188343, admissionDays: 157, admissionType: "Emergency", dischargeDate: "assassins", medication: "Lighter", testResults: "Abnormal" },
  { name: "Mab puu", age: 38, gender: "Female", bloodType: "D", condition: "Hypertension", hospital: "1/2/2021", insurance: "Jared Ru Gardner-Cigna", billing: 336433, admissionDays: 223, admissionType: "Emergency", dischargeDate: "assassins", medication: "Penicillin", testResults: "Normal" },
  { name: "DSM uA", age: 54, gender: "Female", bloodType: "B+", condition: "Hypertension", hospital: "assassins", insurance: "Brandy N. Guerrero-Aenea", billing: 570101, admissionDays: 238, admissionType: "Elective", dischargeDate: "assassins", medication: "Paracetate", testResults: "Abnormal" },
  { name: "DDM a", age: 34, gender: "Male", bloodType: "B+", condition: "Asylum", hospital: "assassins", insurance: "Jacob Huijun Ltd", billing: 470943, admissionDays: 191, admissionType: "Urgent", dischargeDate: "3/1/2020", medication: "Ibuprofen", testResults: "Inconclusive" },
  { name: "AmE psp", age: 23, gender: "Female", bloodType: "A+", condition: "Arthritis", hospital: "assassins", insurance: "Kristina F.Cru-Sant Uniteelite", billing: 528533, admissionDays: 246, admissionType: "Elective", dischargeDate: "assassins", medication: "Penicillin", testResults: "Normal" },
  { name: "WILIAM A", age: 78, gender: "Male", bloodType: "AB+", condition: "Arthritis", hospital: "assassins", insurance: "John Hart Group Du Medicare", billing: 179832, admissionDays: 248, admissionType: "Elective", dischargeDate: "assassins", medication: "Penicillin", testResults: "Normal" },
  { name: "OTU oXTE", age: 49, gender: "Male", bloodType: "AB+", condition: "Cancer", hospital: "assassins", insurance: "Heather LeCape-Fini Medicare", billing: 211885, admissionDays: 494, admissionType: "Elective", dischargeDate: "5/4/2020", medication: "Ibuprofen", testResults: "Normal" },
  { name: "NHOLF no", age: 80, gender: "Female", bloodType: "D", condition: "Asylum", hospital: "assassins", insurance: "Lynn Cuyo-Deche Blei", billing: 606, admissionDays: 228, admissionType: "Emergency", dischargeDate: "assassins", medication: "Lighter", testResults: "Abnormal" },
  { name: "DAAD An", age: 25, gender: "Female", bloodType: "AB+", condition: "Asylum", hospital: "1/7/2021", insurance: "Emma J.Shao and Medicare", billing: 545342, admissionDays: 228, admissionType: "Elective", dischargeDate: "assassins", medication: "Lighter", testResults: "Abnormal" },
  { name: "Ortsher tc", age: 39, gender: "Male", bloodType: "AB+", condition: "Diabetes", hospital: "assassins", insurance: "Laura Myrt LC Martin-Laurent", billing: 497777, admissionDays: 481, admissionType: "Urgent", dischargeDate: "assassins", medication: "Paracetate", testResults: "Inconclusive" },
  { name: "Gaskador d", age: 26, gender: "Female", bloodType: "D", condition: "Hypertension", hospital: "assassins", insurance: "Tavis Pat Espinoza Aenea", billing: 598028, admissionDays: 221, admissionType: "Urgent", dischargeDate: "assassins", medication: "Ibuprofen", testResults: "Normal" },
  { name: "NHOLF U", age: 50, gender: "Female", bloodType: "D", condition: "Diabetes", hospital: "assassins", insurance: "Christine Gao Garci-Cigna", billing: 482000, admissionDays: 218, admissionType: "Emergency", dischargeDate: "assassins", medication: "Lighter", testResults: "Abnormal" },
  { name: "Ahmed ft", age: 57, gender: "Female", bloodType: "B+", condition: "Obesity", hospital: "assassins", insurance: "Emily Tay Walton/Medicare", billing: 297294, admissionDays: 272, admissionType: "Urgent", dischargeDate: "assassins", medication: "Penicillin", testResults: "Abnormal" },
  { name: "OBSTOPP", age: 74, gender: "Female", bloodType: "D", condition: "Hypertension", hospital: "assassins", insurance: "William F.R.C.Young-Cigna", billing: 496432, admissionDays: 478, admissionType: "Emergency", dischargeDate: "assassins", medication: "Lighter", testResults: "Abnormal" },
  { name: "Thomas n", age: 81, gender: "Male", bloodType: "A+", condition: "Hypertension", hospital: "assassins", insurance: "Jennifer C.Meadow-Cigna", billing: 358359, admissionDays: 148, admissionType: "Urgent", dischargeDate: "2/9/2020", medication: "Aspirin", testResults: "Normal" },
  { name: "Mr. eMC ld", age: 69, gender: "Female", bloodType: "A+", condition: "Asylum", hospital: "assassins", insurance: "Matthew and Howl-Cigna", billing: 259683, admissionDays: 216, admissionType: "Elective", dischargeDate: "assassins", medication: "Paracetate", testResults: "Normal" },
  { name: "KATHERIN d", age: 26, gender: "Female", bloodType: "AB+", condition: "Obesity", hospital: "6/9/2021", insurance: "Mary Legge Jack Cutladette", billing: 217845, admissionDays: 410, admissionType: "Urgent", dischargeDate: "7/1/2020", medication: "Paracetate", testResults: "Normal" },
  { name: "PAUL WILL", age: 81, gender: "Female", bloodType: "AB+", condition: "Cancer", hospital: "assassins", insurance: "Kristin M.Gates BroMedicare", billing: 426845, admissionDays: 338, admissionType: "Urgent", dischargeDate: "9/8/2020", medication: "Penicillin", testResults: "Abnormal" },
  { name: "YMN bAE", age: 85, gender: "Male", bloodType: "D+", condition: "Cancer", hospital: "assassins", insurance: "Daniel M. Group ArrMedicare", billing: 505858, admissionDays: 300, admissionType: "Emergency", dischargeDate: "assassins", medication: "Penicillin", testResults: "Normal" },
  { name: "OBSTOPP", age: 81, gender: "Female", bloodType: "D+", condition: "Hypertension", hospital: "assassins", insurance: "Emily Erica Luo Sanz-Cigna", billing: 256154, admissionDays: 411, admissionType: "Elective", dischargeDate: "assassins", medication: "Paracetate", testResults: "Normal" },
  { name: "CHRISTRY", age: 58, gender: "Male", bloodType: "A+", condition: "Diabetes", hospital: "5/4/2020", insurance: "Heather's Nelson/Cigna", billing: 369222, admissionDays: 413, admissionType: "Urgent", dischargeDate: "assassins", medication: "Aspirin", testResults: "Normal" },
  { name: "MLB brbm", age: 22, gender: "Male", bloodType: "D+", condition: "Hypertension", hospital: "9/9/2023", insurance: "John Smith Knight and Uniteelite", billing: 280515, admissionDays: 157, admissionType: "Urgent", dischargeDate: "assassins", medication: "Ibuprofen", testResults: "Abnormal" }
];

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Health Advisor initialized');
    
    // Set up multiple select elements
    const multiSelects = document.querySelectorAll('select[multiple]');
    multiSelects.forEach(select => {
        select.size = Math.min(select.options.length, 4);
    });
    
    // Initialize dynamic questions
    showDynamicQuestions();
    
    // Add event listeners for maximum compatibility
    const healthForm = document.getElementById('healthForm');
    if (healthForm) {
        healthForm.addEventListener('submit', function(e) {
            e.preventDefault();
            analyzeData();
        });
    }
    
    const analyzeBtn = document.querySelector('button[onclick="analyzeData()"]');
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', analyzeData);
    }
    
    // Initialize dataset tab
    analyzeDataset();
});

// Switch between tabs
function switchTab(tabName) {
    try {
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Deactivate all tabs
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Activate selected tab and content
        document.getElementById(`${tabName}-tab`).classList.add('active');
        const tabElement = document.querySelector(`.tab[onclick*="switchTab('${tabName}')"]`);
        if (tabElement) {
            tabElement.classList.add('active');
        }
    } catch (error) {
        console.error('Tab switch error:', error);
        showError(`Could not switch tabs: ${error.message}`);
    }
}

// Show dynamic questions based on selected symptom
function showDynamicQuestions() {
    try {
        const symptom = document.getElementById('symptom').value;
        const questionDiv = document.getElementById('dynamicQuestions');
        
        if (!questionDiv) {
            throw new Error('Dynamic questions container not found');
        }

        let questions = '';

        if (symptom === 'fatigue') {
            questions = `
                <label for="fatiguePattern">When do you feel most fatigued?</label>
                <select id="fatiguePattern">
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                    <option value="allDay">All day</option>
                </select>

                <label for="fatigueChange">Any recent changes that might contribute?</label>
                <input type="text" id="fatigueChange" placeholder="e.g., new job, illness, medication">

                <label for="fatigueActivity">Does rest improve your fatigue?</label>
                <select id="fatigueActivity">
                    <option value="yes">Yes</option>
                    <option value="somewhat">Somewhat</option>
                    <option value="no">No</option>
                </select>
            `;
        } else if (symptom === 'headache') {
            questions = `
                <label for="headacheType">Headache Type:</label>
                <select id="headacheType">
                    <option value="tension">Tension</option>
                    <option value="migraine">Migraine</option>
                    <option value="sinus">Sinus</option>
                    <option value="cluster">Cluster</option>
                    <option value="unknown">Not sure</option>
                </select>

                <label for="headacheLocation">Pain Location:</label>
                <select id="headacheLocation">
                    <option value="forehead">Forehead</option>
                    <option value="temples">Temples</option>
                    <option value="back">Back of head</option>
                    <option value="oneSide">One side</option>
                    <option value="allOver">All over</option>
                </select>

                <label for="headacheTriggers">Known Headache Triggers:</label>
                <select id="headacheTriggers" multiple>
                    <option value="stress">Stress</option>
                    <option value="food">Certain foods</option>
                    <option value="sleep">Sleep changes</option>
                    <option value="hormones">Hormonal changes</option>
                    <option value="weather">Weather changes</option>
                </select>
            `;
        } else if (symptom === 'anxiety') {
            questions = `
                <label for="anxietyTriggers">What situations trigger your anxiety?</label>
                <input type="text" id="anxietyTriggers" placeholder="e.g., social situations, work deadlines">

                <label for="anxietyPhysical">Physical Symptoms (select all that apply):</label>
                <select id="anxietyPhysical" multiple>
                    <option value="heart">Racing heart</option>
                    <option value="sweating">Sweating</option>
                    <option value="trembling">Trembling</option>
                    <option value="breathing">Shortness of breath</option>
                    <option value="chest">Chest tightness</option>
                    <option value="nausea">Nausea</option>
                </select>

                <label for="anxietyFrequency">How often do you experience anxiety?</label>
                <select id="anxietyFrequency">
                    <option value="rarely">Rarely (less than once a month)</option>
                    <option value="monthly">Monthly</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                    <option value="constant">Nearly constant</option>
                </select>
            `;
        }

        questionDiv.innerHTML = questions;
    } catch (error) {
        console.error('Dynamic questions error:', error);
        showError(`Could not load questions: ${error.message}`);
    }
}

// Main analysis function
function analyzeData() {
    try {
        console.log('Analysis started');
        
        // Show loading state
        const resultDiv = document.getElementById('result');
        if (!resultDiv) {
            throw new Error('Results container not found');
        }
        
        resultDiv.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                <p>Analyzing your health data...</p>
            </div>
        `;
        
        // Switch to results tab
        switchTab('results');

        // Process after short delay
        setTimeout(() => {
            try {
                generateAnalysis();
            } catch (error) {
                console.error('Analysis failed:', error);
                resultDiv.innerHTML = `
                    <div class="error-message">
                        Analysis failed: ${error.message}
                    </div>
                `;
            }
        }, 100);
    } catch (error) {
        console.error('Analysis setup failed:', error);
        showError(`Could not start analysis: ${error.message}`);
    }
}

// Generate analysis from form data
function generateAnalysis() {
    try {
        // Validate required fields
        const requiredFields = {
            'lifestyle': 'activity level',
            'stressLevel': 'stress level',
            'symptom': 'primary symptom'
        };
        
        for (const [fieldId, fieldName] of Object.entries(requiredFields)) {
            const element = document.getElementById(fieldId);
            if (!element || !element.value || element.value === 'none') {
                throw new Error(`Please select your ${fieldName}`);
            }
        }

        // Collect all data
        const analysisData = {
            timestamp: new Date().toISOString(),
            userType: document.getElementById('userType').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            lifestyle: document.getElementById('lifestyle').value,
            stressLevel: document.getElementById('stressLevel').value,
            sleepQuality: document.getElementById('sleepQuality').value,
            environment: Array.from(document.getElementById('environment').selectedOptions).map(opt => opt.value),
            triggers: Array.from(document.getElementById('triggers').selectedOptions).map(opt => opt.value),
            symptom: document.getElementById('symptom').value,
            symptomSeverity: parseInt(document.getElementById('symptomSeverity').value),
            symptomDuration: document.getElementById('symptomDuration').value,
            additionalNotes: document.getElementById('additionalNotes').value,
            preferences: {
                minSideEffects: document.getElementById('prefMinSideEffects').checked,
                nonInvasive: document.getElementById('prefNonInvasive').checked,
                natural: document.getElementById('prefNatural').checked,
                costEffective: document.getElementById('prefCostEffective').checked
            },
            // Get dynamic symptom data
            symptomDetails: getSymptomDetails()
        };

        // Store analysis
        currentAnalysis = analysisData;
        healthHistory.push(currentAnalysis);
        updateHistoryDisplay();

        // Show results
        displayAnalysisResults(analysisData);
        
    } catch (error) {
        console.error('Analysis generation failed:', error);
        throw error;
    }
}

// Get additional symptom-specific details
function getSymptomDetails() {
    const symptom = document.getElementById('symptom').value;
    const details = {};
    
    switch(symptom) {
        case 'headache':
            details.type = document.getElementById('headacheType')?.value;
            details.location = document.getElementById('headacheLocation')?.value;
            details.triggers = Array.from(document.getElementById('headacheTriggers')?.selectedOptions || []).map(opt => opt.value);
            break;
        case 'fatigue':
            details.pattern = document.getElementById('fatiguePattern')?.value;
            details.change = document.getElementById('fatigueChange')?.value;
            details.activity = document.getElementById('fatigueActivity')?.value;
            break;
        case 'anxiety':
            details.triggers = document.getElementById('anxietyTriggers')?.value;
            details.physical = Array.from(document.getElementById('anxietyPhysical')?.selectedOptions || []).map(opt => opt.value);
            details.frequency = document.getElementById('anxietyFrequency')?.value;
            break;
    }
    
    return details;
}

// Display analysis results
function displayAnalysisResults(data) {
    try {
        const resultDiv = document.getElementById('result');
        if (!resultDiv) {
            throw new Error('Results container not found');
        }

        const riskLevel = calculateRiskLevel(data);
        const recommendations = generateRecommendations(data);
        const alternatives = generateAlternativeOptions(data);
        const similarCases = findSimilarCases(data);

        let similarCasesHTML = '';
        if (similarCases.length > 0) {
            similarCasesHTML = `
                <div class="explanation">
                    <h3>Similar Cases Analysis</h3>
                    <p>Our database shows ${similarCases.length} similar cases with these outcomes:</p>
                    <ul>
                        <li>Most common medication: ${getMostCommonMedication(similarCases)}</li>
                        <li>Average hospital stay: ${getAverageStay(similarCases)} days</li>
                        <li>Test results: ${getTestResultDistribution(similarCases)}</li>
                    </ul>
                </div>
            `;
        }

        resultDiv.innerHTML = `
            <h2>Health Analysis Results</h2>
            
            <div class="risk-assessment">
                <h3>Risk Assessment</h3>
                <div class="risk-meter">
                    <div class="risk-level" style="width: ${riskLevel}%"></div>
                </div>
                <p>Your overall health risk is ${getRiskLevelDescription(riskLevel)}</p>
            </div>
            
            <div class="contextual-factors">
                <h3>Key Factors</h3>
                ${generateContextualFactors(data)}
            </div>
            
            ${similarCasesHTML}
            
            <div class="recommendations">
                <h3>Personalized Recommendations</h3>
                ${recommendations}
            </div>
            
            <div class="alternatives">
                <h3>Alternative Approaches</h3>
                ${alternatives}
            </div>
            
            <div class="data-summary">
                <h3>Your Input Summary</h3>
                ${generateDataSummary(data)}
            </div>
        `;
    } catch (error) {
        console.error('Results display failed:', error);
        throw error;
    }
}

// Calculate risk level (0-100)
function calculateRiskLevel(data) {
    let risk = 0;
    
    // Base risk from symptom severity
    risk += data.symptom === 'none' ? 0 : data.symptomSeverity * 5;
    
    // Add from stress (inverse of sleep quality)
    risk += (10 - data.sleepQuality) * 2;
    
    // Add from stress level
    risk += data.stressLevel * 2;
    
    // Lifestyle factors
    if (data.lifestyle === 'sedentary') risk += 15;
    if (data.lifestyle === 'moderate') risk += 5;
    
    // Cap at 100
    return Math.min(100, risk);
}

function getRiskLevelDescription(riskLevel) {
    if (riskLevel < 30) return '<strong>low</strong> (generally healthy)';
    if (riskLevel < 60) return '<strong>moderate</strong> (some concerns)';
    return '<strong>high</strong> (multiple risk factors)';
}

// Generate recommendations HTML
function generateRecommendations(data) {
    let recommendations = [];
    
    // Lifestyle recommendations
    if (data.lifestyle === 'sedentary') {
        recommendations.push({
            title: "Increase Activity",
            content: "Begin with 15-30 minutes of moderate exercise daily",
            tags: ["lifestyle", "low-risk"]
        });
    }
    
    // Stress recommendations
    if (data.stressLevel > 6) {
        recommendations.push({
            title: "Stress Management",
            content: "Practice daily mindfulness or deep breathing exercises",
            tags: ["mental-health", "preventative"]
        });
    }
    
    // Sleep recommendations
    if (data.sleepQuality < 5) {
        recommendations.push({
            title: "Sleep Improvement",
            content: "Establish consistent bedtime routine and sleep schedule",
            tags: ["lifestyle", "foundational"]
        });
    }
    
    // Symptom-specific recommendations
    if (data.symptom === 'headache') {
        recommendations.push({
            title: "Headache Relief",
            content: data.symptomDetails.type === 'tension' ? 
                "Apply warm compress to neck and shoulders" : 
                "Rest in dark, quiet room during episodes",
            tags: ["symptom-specific"]
        });
    }
    
    // Format as HTML
    return recommendations.map(rec => `
        <div class="treatment-card">
            <h4>${rec.title}</h4>
            <p>${rec.content}</p>
            <div class="tags">
                ${rec.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Generate alternative options HTML
function generateAlternativeOptions() {
    const prefNatural = document.getElementById('prefNatural').checked;
    const prefNonInvasive = document.getElementById('prefNonInvasive').checked;
    
    let alternatives = [];
    
    alternatives.push({
        title: "Watchful Waiting",
        content: "Monitor symptoms for 1-2 weeks before considering other options",
        type: "conservative"
    });
    
    if (prefNatural) {
        alternatives.push({
            title: "Natural Approaches",
            content: "Consider herbal remedies or acupuncture (consult provider first)",
            type: "natural"
        });
    }
    
    if (!prefNonInvasive) {
        alternatives.push({
            title: "Medical Options",
            content: "Consult healthcare provider about medications or procedures",
            type: "medical"
        });
    }
    
    return alternatives.map(alt => `
        <div class="alternative ${alt.type}">
            <h4>${alt.title}</h4>
            <p>${alt.content}</p>
        </div>
    `).join('');
}

// Generate contextual factors HTML
function generateContextualFactors(data) {
    let factors = [];
    
    if (data.lifestyle === 'sedentary') {
        factors.push("Sedentary lifestyle contributing to health risks");
    }
    
    if (data.stressLevel > 6) {
        factors.push("High stress levels affecting wellbeing");
    }
    
    if (data.environment.length > 0) {
        factors.push(`Environmental factors: ${data.environment.join(', ')}`);
    }
    
    return `
        <ul>
            ${factors.map(factor => `<li>${factor}</li>`).join('')}
        </ul>
    `;
}

// Generate data summary HTML
function generateDataSummary(data) {
    return `
        <div class="data-point"><span>Primary Symptom:</span> <span>${data.symptom || 'None'}</span></div>
        <div class="data-point"><span>Severity:</span> <span>${data.symptomSeverity}/10</span></div>
        <div class="data-point"><span>Duration:</span> <span>${data.symptomDuration}</span></div>
        <div class="data-point"><span>Lifestyle:</span> <span>${data.lifestyle}</span></div>
        <div class="data-point"><span>Stress Level:</span> <span>${data.stressLevel}/10</span></div>
        <div class="data-point"><span>Sleep Quality:</span> <span>${data.sleepQuality}/10</span></div>
    `;
}

// Update history display
function updateHistoryDisplay() {
    const historyDiv = document.getElementById('historyResults');
    
    if (healthHistory.length === 0) {
        historyDiv.innerHTML = `<p>No analysis history yet</p>`;
        return;
    }
    
    historyDiv.innerHTML = `
        <h2>Analysis History</h2>
        <div class="history-entries">
            ${healthHistory.map((entry, index) => `
                <div class="history-entry">
                    <h3>#${index + 1}: ${entry.symptom} (${new Date(entry.timestamp).toLocaleString()})</h3>
                    <p>Severity: ${entry.symptomSeverity}/10, Stress: ${entry.stressLevel}/10</p>
                    <button onclick="viewHistoryEntry(${index})">View Details</button>
                </div>
            `).join('')}
        </div>
    `;
}

// View historical analysis entry
function viewHistoryEntry(index) {
    if (index >= 0 && index < healthHistory.length) {
        currentAnalysis = healthHistory[index];
        switchTab('results');
        displayAnalysisResults(currentAnalysis);
    }
}

// Show error message
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.prepend(errorDiv);
    setTimeout(() => errorDiv.remove(), 5000);
}

// Dataset analysis functions
function analyzeDataset() {
  const conditionFilter = document.getElementById('filterCondition').value;
  const ageFilter = document.getElementById('filterAge').value;
  
  // Filter data
  let filteredData = healthcareDataset;
  
  if (conditionFilter !== 'all') {
    filteredData = filteredData.filter(patient => patient.condition === conditionFilter);
  }
  
  if (ageFilter !== 'all') {
    const [minAge, maxAge] = ageFilter === '60+' ? [60, 120] : ageFilter.split('-').map(Number);
    filteredData = filteredData.filter(patient => {
      if (ageFilter === '60+') return patient.age >= minAge;
      return patient.age >= minAge && patient.age <= maxAge;
    });
  }
  
  // Display results
  displayDatasetStats(filteredData);
  displayDatasetTable(filteredData);
  renderConditionChart(filteredData);
}

function displayDatasetStats(data) {
  const statsContainer = document.getElementById('statsContainer');
  
  const totalPatients = data.length;
  const avgAge = totalPatients > 0 ? 
    (data.reduce((sum, patient) => sum + patient.age, 0) / totalPatients).toFixed(1) : 0;
  
  const conditionCounts = {};
  data.forEach(patient => {
    conditionCounts[patient.condition] = (conditionCounts[patient.condition] || 0) + 1;
  });
  
  const mostCommonCondition = Object.keys(conditionCounts).reduce((a, b) => 
    conditionCounts[a] > conditionCounts[b] ? a : b, 'N/A');
  
  statsContainer.innerHTML = `
    <div class="data-point"><span>Total Patients:</span> <span>${totalPatients}</span></div>
    <div class="data-point"><span>Average Age:</span> <span>${avgAge}</span></div>
    <div class="data-point"><span>Most Common Condition:</span> <span>${mostCommonCondition}</span></div>
    <div class="data-point"><span>Gender Distribution:</span> <span>${getGenderDistribution(data)}</span></div>
  `;
}

function getGenderDistribution(data) {
  const counts = { Male: 0, Female: 0, Other: 0 };
  data.forEach(patient => {
    const gender = patient.gender || 'Other';
    counts[gender] = (counts[gender] || 0) + 1;
  });
  return `Male: ${counts.Male}, Female: ${counts.Female}`;
}

function displayDatasetTable(data) {
  const container = document.getElementById('dataTableContainer');
  
  if (data.length === 0) {
    container.innerHTML = '<p>No matching records found</p>';
    return;
  }
  
  let tableHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Condition</th>
          <th>Medication</th>
          <th>Test Results</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  data.slice(0, 50).forEach(patient => { // Limit to first 50 for performance
    tableHTML += `
      <tr>
        <td>${patient.name}</td>
        <td>${patient.age}</td>
        <td>${patient.gender}</td>
        <td>${patient.condition}</td>
        <td>${patient.medication}</td>
        <td class="${patient.testResults.toLowerCase()}">${patient.testResults}</td>
      </tr>
    `;
  });
  
  tableHTML += `
      </tbody>
    </table>
    <p>Showing ${Math.min(data.length, 50)} of ${data.length} records</p>
  `;
  
  container.innerHTML = tableHTML;
}

function renderConditionChart(data) {
  const container = document.getElementById('conditionChart');
  
  // Count conditions
  const conditionCounts = {};
  data.forEach(patient => {
    conditionCounts[patient.condition] = (conditionCounts[patient.condition] || 0) + 1;
  });
  
  // Prepare chart data
  const labels = Object.keys(conditionCounts);
  const values = Object.values(conditionCounts);
  
  // Simple HTML chart (in a real app you'd use Chart.js or similar)
  let chartHTML = '<div class="chart-container"><div class="chart-bars">';
  
  const maxValue = Math.max(...values);
  labels.forEach((label, i) => {
    const height = (values[i] / maxValue) * 100;
    chartHTML += `
      <div class="chart-bar">
        <div class="bar" style="height: ${height}%"></div>
        <div class="label">${label}<br>${values[i]}</div>
      </div>
    `;
  });
  
  chartHTML += '</div></div>';
  container.innerHTML = chartHTML;
}

function findSimilarCases(userData) {
  if (!userData.symptom || userData.symptom === 'none') return [];
  
  // Map symptom names to dataset conditions
  const symptomToCondition = {
    'headache': ['Hypertension', 'Migraine'],
    'fatigue': ['Anemia', 'Chronic Fatigue'],
    'anxiety': ['Anxiety Disorder'],
    'digestive': ['IBS', 'GERD'],
    'pain': ['Arthritis', 'Fibromyalgia'],
    'respiratory': ['Asthma', 'COPD']
  };
  
  const conditions = symptomToCondition[userData.symptom] || [userData.symptom];
  
  return healthcareDataset.filter(patient => {
    return conditions.includes(patient.condition) && 
           Math.abs(patient.age - userData.age) <= 15;
  });
}

function getMostCommonMedication(cases) {
  const medCounts = {};
  cases.forEach(patient => {
    medCounts[patient.medication] = (medCounts[patient.medication] || 0) + 1;
  });
  return Object.keys(medCounts).reduce((a, b) => medCounts[a] > medCounts[b] ? a : b, 'N/A');
}

function getAverageStay(cases) {
  if (cases.length === 0) return 0;
  const total = cases.reduce((sum, patient) => sum + (patient.admissionDays || 0), 0);
  return (total / cases.length).toFixed(1);
}

function getTestResultDistribution(cases) {
  const resultCounts = { Normal: 0, Abnormal: 0, Inconclusive: 0 };
  cases.forEach(patient => {
    if (patient.testResults) {
      const result = patient.testResults.split(' ')[0]; // Get first word
      if (resultCounts.hasOwnProperty(result)) {
        resultCounts[result]++;
      }
    }
  });
  return `Normal: ${resultCounts.Normal}, Abnormal: ${resultCounts.Abnormal}, Inconclusive: ${resultCounts.Inconclusive}`;
}
