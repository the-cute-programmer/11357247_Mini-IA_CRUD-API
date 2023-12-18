# Medical Record System

This project is an Electronic Medical Record (EMR) system implemented using Node.js, Express.js, and MongoDB for the University of Ghana Medical Center.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

1. Register patients with essential information.
2. Start encounters for patients, specifying the type of encounter.
3. Submit vital information by nurses for registered patients.
4. View a list of patients.
5. View details of a specific patient.

## Prerequisites

- Node.js
- npm
- MongoDB (Make sure it's running)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/medical-record-system.git


Certainly! Below is a basic README template for your project. You can customize it further based on your specific project details and requirements.

markdown
Copy code
# Medical Record System

This project is an Electronic Medical Record (EMR) system implemented using Node.js, Express.js, and MongoDB for the University of Ghana Medical Center.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

1. Register patients with essential information.
2. Start encounters for patients, specifying the type of encounter.
3. Submit vital information by nurses for registered patients.
4. View a list of patients.
5. View details of a specific patient.

## Prerequisites

- Node.js
- npm
- MongoDB (Make sure it's running)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/medical-record-system.git
   ```


2. Navigate to the project directory:
cd repository folder on your computer

3. Install dependencies:
npm install

## Usage
Start the server:
node index.js


Access the API at http://localhost:3000/api.

API Endpoints
POST /api/patients: Create a new patient.
POST /api/encounters: Create a new encounter.
POST /api/vitals: Create new vital information.
GET /api/patients: Retrieve a list of all patients.
GET /api/patients/:patientID: Retrieve details of a specific patient.