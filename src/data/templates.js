export const templates = [
  {
    id: 1,
    name: 'Offer Letter',
    category: 'Offer & Appointment',
    fields: ['candidateName', 'designation', 'companyName', 'salary', 'joiningDate', 'hrName', 'companyAddress', 'contactInfo'],
    content: ({ candidateName, designation, companyName, salary, joiningDate, hrName, companyAddress, contactInfo }) => `
      <div class="bg-white p-4 border rounded">
        <h2 class="mb-3 fw-bold text-primary">Offer Letter</h2>
        <p class="mb-2">${companyName}<br>${companyAddress}<br>${contactInfo}</p>
        <p class="mb-3">Date: ${joiningDate}</p>
        <p class="mb-3">Dear ${candidateName},</p>
        <p class="mb-3">We are pleased to offer you the position of <strong>${designation}</strong> at ${companyName}, with a starting salary of ₹${salary} per annum. Your joining date will be ${joiningDate}.</p>
        <p class="mb-3">This offer is subject to the verification of your credentials, background checks, and acceptance of our company policies.</p>
        <p class="mb-3">Please sign and return a copy of this letter as a token of your acceptance. Failure to respond within 7 days will result in automatic cancellation of this offer.</p>
        <p class="mt-4">Regards,<br>${hrName}<br>HR Department</p>
      </div>
    `
  },
  {
    id: 2,
    name: 'Appointment Letter',
    category: 'Offer & Appointment',
    fields: ['employeeName', 'designation', 'companyName', 'joiningDate', 'salary', 'reportingManager', 'workingHours', 'probationPeriod', 'hrName', 'companyAddress', 'contactInfo'],
    content: ({ employeeName, designation, companyName, joiningDate, salary, reportingManager, workingHours, probationPeriod, hrName, companyAddress, contactInfo }) => `
      <div class="bg-white p-4 border rounded">
        <h2 class="mb-3 fw-bold text-primary">Appointment Letter</h2>
        <p class="mb-2">${companyName}<br>${companyAddress}<br>${contactInfo}</p>
        <p class="mb-3">Date: ${joiningDate}</p>
        <p class="mb-3">Dear ${employeeName},</p>
        <p class="mb-3">We are pleased to appoint you as <strong>${designation}</strong> at ${companyName}, effective from ${joiningDate}. You will be reporting to ${reportingManager}. Your working hours will be ${workingHours}, Monday to Friday.</p>
        <p class="mb-3">Your gross monthly salary will be ₹${salary}. You will undergo a probation period of ${probationPeriod}. During this time, your performance will be reviewed periodically.</p>
        <p class="mb-3">All employment terms and policies outlined in the employee handbook are applicable.</p>
        <p class="mb-3">Welcome aboard!</p>
        <p class="mt-4">Sincerely,<br>${hrName}<br>HR Manager</p>
      </div>
    `
  },
  {
    id: 3,
    name: 'Experience Letter',
    category: 'Employment',
    fields: ['employeeName', 'companyName', 'startDate', 'endDate', 'designation', 'hrName', 'companyAddress'],
    content: ({ employeeName, companyName, startDate, endDate, designation, hrName, companyAddress }) => `
      <div class="bg-white p-4 border rounded">
        <h2 class="text-center mb-3 fw-bold text-primary">Experience Letter</h2>
        <p class="mb-3">To Whom It May Concern,</p>
        <p class="mb-3">This is to certify that ${employeeName} was employed with ${companyName}, located at ${companyAddress}, from ${startDate} to ${endDate} as a ${designation}. During their tenure, they exhibited professionalism, teamwork, and domain expertise.</p>
        <p class="mb-3">We appreciate their valuable contributions and wish them success in their future endeavors.</p>
        <p class="mt-4">Regards,<br>${hrName}<br>HR Department</p>
      </div>
    `
  },
  {
    id: 4,
    name: 'Relieving Letter',
    category: 'Employment',
    fields: ['employeeName', 'designation', 'companyName', 'lastWorkingDay', 'hrName'],
    content: ({ employeeName, designation, companyName, lastWorkingDay, hrName }) => `
      <div class="bg-white p-4 border rounded">
        <h2 class="mb-3 fw-bold text-primary">Relieving Letter</h2>
        <p class="mb-3">Dear ${employeeName},</p>
        <p class="mb-3">This is to acknowledge that you have been relieved from your duties as ${designation} at ${companyName}, effective from ${lastWorkingDay}. You have been relieved of all responsibilities as per company clearance procedures.</p>
        <p class="mb-3">We thank you for your services and wish you success in your future endeavors.</p>
        <p class="mt-4">Regards,<br>${hrName}<br>HR Department</p>
      </div>
    `
  },
  {
    id: 5,
    name: 'Leave Approval Letter',
    category: 'Leave & Absence',
    fields: ['employeeName', 'startDate', 'endDate', 'approverName'],
    content: ({ employeeName, startDate, endDate, approverName }) => `
      <div class="bg-white p-4 border rounded">
        <h2 class="mb-3 fw-bold text-primary">Leave Approval</h2>
        <p class="mb-3">Dear ${employeeName},</p>
        <p class="mb-3">Your leave request from ${startDate} to ${endDate} has been approved. Ensure all handovers are completed before your absence. Uninformed extension of leave is subject to disciplinary action.</p>
        <p class="mt-4">Regards,<br>${approverName}<br>Team HR</p>
      </div>
    `
  },
  {
    id: 6,
    name: 'Absenteeism Warning Letter',
    category: 'Leave & Absence',
    fields: ['employeeName', 'absenceDates', 'hrName'],
    content: ({ employeeName, absenceDates, hrName }) => `
      <div class="bg-white p-4 border rounded">
        <h2 class="mb-3 fw-bold text-primary">Warning for Absenteeism</h2>
        <p class="mb-3">Dear ${employeeName},</p>
        <p class="mb-3">It has been observed that you were absent without prior notice on ${absenceDates}. Such behavior is in violation of our company policy and disrupts workflow.</p>
        <p class="mb-3">Repeated violations will attract disciplinary action including suspension or termination.</p>
        <p class="mt-4">Regards,<br>${hrName}<br>HR Team</p>
      </div>
    `
  },
  {
    id: 7,
    name: 'Appreciation Letter',
    category: 'Admin & Communication',
    fields: ['employeeName', 'projectOrGoal', 'managerName'],
    content: ({ employeeName, projectOrGoal, managerName }) => `
      <div class="bg-white p-4 border rounded">
        <h2 class="mb-3 fw-bold text-primary">Letter of Appreciation</h2>
        <p class="mb-3">Dear ${employeeName},</p>
        <p class="mb-3">We would like to sincerely appreciate your outstanding efforts and achievements in ${projectOrGoal}. Your dedication and perseverance have greatly benefited the organization.</p>
        <p class="mb-3">Keep up the excellent work!</p>
        <p class="mt-4">Regards,<br>${managerName}</p>
      </div>
    `
  },
  {
    id: 8,
    name: 'NOC Letter',
    category: 'Admin & Communication',
    fields: ['employeeName', 'startDate', 'purpose', 'authorizedSignatory'],
    content: ({ employeeName, startDate, purpose, authorizedSignatory }) => `
      <div class="bg-white p-4 border rounded">
        <h2 class="mb-3 fw-bold text-primary">No Objection Certificate (NOC)</h2>
        <p class="mb-3">This is to certify that ${employeeName} has been working with our organization since ${startDate}. We have no objection to their application for ${purpose}.</p>
        <p class="mb-3">This certificate is issued upon request and does not constitute a legal obligation.</p>
        <p class="mt-4">Regards,<br>${authorizedSignatory}</p>
      </div>
    `
  },
  {
    id: 9,
    name: 'Salary Slip Template',
    category: 'Finance',
    fields: ['name', 'designation', 'month', 'basic', 'hra', 'allowances', 'deductions', 'total', 'companyName'],
    content: ({ name, designation, month, basic, hra, allowances, deductions, total, companyName }) => `
      <div class="bg-white p-4 border rounded">
        <h2 class="mb-3 fw-bold text-primary">${companyName} - Salary Slip</h2>
        <p class="mb-3"><strong>Employee Name:</strong> ${name}<br>
        <strong>Designation:</strong> ${designation}<br>
        <strong>Month:</strong> ${month}</p>
        <table class="table table-bordered table-sm">
          <thead class="table-light">
            <tr>
              <th>Earnings</th>
              <th>Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Basic Salary</td><td>${basic}</td></tr>
            <tr><td>HRA</td><td>${hra}</td></tr>
            <tr><td>Allowances</td><td>${allowances}</td></tr>
            <tr><td>Deductions</td><td>${deductions}</td></tr>
            <tr><td><strong>Net Pay</strong></td><td><strong>${total}</strong></td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: 10,
    name: 'Form 16 Issuance Letter',
    category: 'Finance',
    fields: ['employeeName', 'year', 'hrName'],
    content: ({ employeeName, year, hrName }) => `
      <div class="bg-white p-4 border rounded">
        <h2 class="mb-3 fw-bold text-primary">Form 16 Issuance</h2>
        <p class="mb-3">Dear ${employeeName},</p>
        <p class="mb-3">This is to inform you that your Form 16 for the financial year ${year} has been generated. You can download it from the employee portal or collect it physically from the HR department.</p>
        <p class="mb-3">For any queries, please reach out to payroll support.</p>
        <p class="mt-4">Regards,<br>${hrName}<br>Accounts Department</p>
      </div>
    `
  },
  {
    id: 11,
    name: 'Internship Offer & Agreement Letter',
    category: 'Offer & Appointment',
    fields: [
      'internName',
      'designation',
      'startDate',
      'endDate',
      'duration',
      'timings',
      'stipend',
      'companyName',
      'companyAddress',
      'contactInfo',
      'agreementDate',
      'city',
      'hrName'
    ],
    content: ({
      internName,
      designation,
      startDate,
      endDate,
      duration,
      timings,
      stipend,
      companyName,
      companyAddress,
      contactInfo,
      agreementDate,
      city,
      hrName
    }) => `
      <div class="bg-white p-4 border rounded">
        <p class="mb-3">${companyName}<br>${companyAddress}<br>${contactInfo}</p>
        <h2 class="text-center mb-3 fw-bold text-primary">Internship Offer & Agreement Letter</h2>
        <p class="mb-3"><strong>This Unpaid Internship Agreement is made and entered into as of Date: ${agreementDate}</strong></p>
        <p class="mb-3">Between ${companyName}, ${city} and the intern,</p>
        <p class="mb-3"><strong>Name:</strong> ${internName}<br>
        <strong>Designation:</strong> ${designation}<br>
        <strong>Timings:</strong> ${timings}<br>
        <small class="text-muted">The Company reserves the right to modify shift timings based on business needs and operational requirements. Any such changes will be communicated in advance.</small></p>
        <h4 class="mt-4 mb-2">1. Internship Details</h4>
        <p class="mb-2">1.1 Your internship will begin on ${startDate} and is expected to end on ${endDate}, lasting for ${duration}.</p>
        <p class="mb-2">1.2 During your internship, you will <strong>${stipend}</strong>.</p>
        <p class="mb-2"><strong>Salary Provision:</strong><br>
        Upon successful completion of the internship (based on performance), you may become eligible for a salary. The salary amount and benefits will be detailed in a separate employment contract and will be subject to applicable taxes and deductions under local laws.</p>
        <p class="mb-2">1.3 Working hours are typically Monday to Friday, with management flexibility around core hours.</p>
        <h4 class="mt-3 mb-2">2. Internship Completion Certification</h4>
        <p class="mb-2">Upon successful completion of the internship with satisfactory attendance and conduct, you will be provided a certificate recognizing your contribution.</p>
        <h4 class="mt-3 mb-2">3. Leaves and Attendance</h4>
        <p class="mb-2">All emergency leaves must be communicated and approved. Academic commitments during the internship should be disclosed in advance.</p>
        <h4 class="mt-3 mb-2">4. Property Damage & NDA</h4>
        <p class="mb-2">Interns are responsible for company property and must sign a separate Non-Disclosure Agreement to protect proprietary information.</p>
        <h4 class="mt-3 mb-2">5. Employment Offer</h4>
        <p class="mb-2">Internship completion does not guarantee full-time employment. Any employment offer is at the sole discretion of the company.</p>
        <h4 class="mt-3 mb-2">6. Reputation Damage</h4>
        <p class="mb-2">Interns must avoid any behavior that could damage the company’s reputation. Violation will lead to immediate termination.</p>
        <h4 class="mt-3 mb-2">7. Governing Law</h4>
        <p class="mb-2">This agreement is governed by the laws of ${city}, Telangana, without regard to its conflict of law principles.</p>
        <p class="mt-4 mb-3"><strong>IN WITNESS WHEREOF</strong>, the parties have executed this Internship Agreement as of the date above.</p>
        <p class="mt-4">Sincerely,<br>For ${companyName}<br>${hrName}<br>HR Manager</p>
        <hr class="my-4">
        <p class="mb-3">By signing this letter, you confirm your understanding of the unpaid nature of this internship and your agreement to all applicable terms.</p>
        <p class="mb-0"><strong>Intern Name:</strong> ________________________<br>
        <strong>Date:</strong> ________________________<br>
        <strong>Intern Signature:</strong> ________________________<br>
        <strong>Place:</strong> ________________________</p>
      </div>
    `
  },
];