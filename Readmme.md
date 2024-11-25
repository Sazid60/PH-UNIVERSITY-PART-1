GitHub Link: https://github.com/Apollo-Level2-Web-Dev/Level2-Batch4-PH-University-Server/tree/part-1

Requirement Analysis: https://docs.google.com/document/d/10mkjS8boCQzW4xpsESyzwCCLJcM3hvLghyD_TeXPBx0/edit?usp=sharing

In this module,

We start by learning about the Software Development Life Cycle (SDLC) and how to initiate a project. We analyze the requirements for a university management system and model the necessary data. We'll design a database schema and create Entity-Relationship (ER) diagrams to organize data. Then, we'll set up API endpoints, build user interfaces, and implement data validation. The course also covers refining code for user validation, routes, controllers, and services. We'll create student user accounts, fix bugs, and set up a global error handler. Additionally, we develop a "not found" route and a response utility, and we wrap up by creating an index route and summarizing the modules. This ensures you gain practical skills for building web applications.

## 11-1 What is SDLC, How we should start a project

- This Project will be based on MVP

#### What is SDLC?

- The Software Development Life Cycle (SDLC) is a systematic process for planning, creating, testing, and deploying software applications. It provides a structured framework that helps software developers and organizations deliver high-quality software that meets customer expectations while adhering to time and cost constraints.

#### PLANNING->ANALYZE->DESIGN->IMPLEMENTATION->TESTING & INTEGRATION->MAINTENANCE

- Analyze : Product Owner, Project Manager, Business Analyst
- Design: System Architect, UI/UX Designer
- Development: Frontend, Backend , Fullstack Developer
- Testing : Solution Architect, QA Engineer, Tester
- Deployment : Database Administration, DevOPS
- Maintenance : Support Engineer, Tester, Developer

#### Requirements Steps

- Analyze : Product Requirements Document(PRD), Business Requirements Document(BDR), Software Requirement Specification(SRS), Functional Requirement Document(FRD)
- Design: System Design Of Software, High Level Design Document, Low Level Design Document, Database Schema
- Development: Frontend, Backend , API Integration, Database Schema
- Testing : Test Plan, Test Case, Test Scripts, Defects Report
- Deployment : Release Notes, Installation Guide, Configuration Guide
- Maintenance : Change Request, Bug Report, Patch Release

#### How we will work ?

- Requirement Analysis -> ER Diagram ->API Endpoint -> WireFrame

### 11-2 Requirement Analysis of PH University Management

PH University Management Project

Functional Requirements:

Authentication
Student
Students can log in and log out securely.
Students can update their password.
Faculty
Faculty can log in and log out securely.
Faculty can update their password.
Admin:
Admin can log in and log out securely.
Admin can update their password.

Profile Management:
Student
Students can manage and update their profile.
Students can update certain fields.
Faculty:
Faculty can manage and update their profile.
Faculty can update certain fields.
Admin:
Admin can manage and update their profile.
Admin can update certain fields.

Academic Process:
Student:
Students can enroll in offered courses for a specific semester.
Students can view their class schedule.
Students can see their grades.
Students can view notice boards and events.
Faculty:
Faculty can manage student grades.
Faculty can access student’s personal and academic information.
Admin:
Admin can manage multiple processes:
Semester.
Course.
Offered Course.
Section.
Room.
Building.

User Management:
Admin:
Admins can manage multiple accounts.
Admin can block/unblock users.
Admin can change user passwords.

### 11-3 Modeling Data for PH University Management

Data Model

User:

\_id
id (generated)
password
needsPasswordChange
role
status
isDeleted
createdAt
updatedAt

Student:
\_id
id (generated)
name
gender
dateOfBirth
email
contactNo
emergencyContactNo
presentAddress
permanentAddress
guardian
localGuardian
profileImage
admissionSemester
isDeleted
createdAt
updatedAt

Faculty:
\_id
id (generated)
designation
name
gender
dateOfBirth
email
contactNo
emergencyContactNo
presentAddress
permanentAddress
profileImage
academicFaculty
academicDepartment
isDeleted
createdAt
updatedAt

Admin:
\_id
id (generated)
designation
name
gender
dateOfBirth
email
contactNo
emergencyContactNo
presentAddress
permanentAddress
profileImage
managementDepartment
isDeleted
createdAt
updatedAt

Academic Semester:

\_id
name
year
code
startMonth
endMonth
createdAt
updatedAt

Academic Faculty:
\_id
name
createdAt
updatedAt

Academic Department:
\_id
name
academicFaculty
createdAt
updatedAt

### 11-4 Design Schema and ER Diagram

- SQL Table is called Collection In NoSQL
- SQL Row is called Document In NoSQL
- SQL Column is called Field In NoSQL

#### We can Do Embedding Or Referencing In NoSQL.

- We can do embedding Up to max 16MB since a document can be only 16 mb
- In Referencing There is no Limitation

##### So where there i a chance of growing data we should use referencing

##### Embedding Pros and cons

| **Pros**                            | **Cons**                    |
| ----------------------------------- | --------------------------- |
| Faster Reading                      | Slow Writing                |
| Update all data with a single query | Update query can be complex |
| Less expensive lookup               | Limited size                |
|                                     | Data duplicacy              |

##### Referencing Pros and cons

| **Pros**        | **Cons**              |
| --------------- | --------------------- |
| Faster Writing  | Slow Reading          |
| Avoid Duplicacy | Slow Expensive Lookup |
| Scalability     |                       |

## 11-6 Create API Endpoints for PH University Management

API Endpoints
User:

users/create-student (POST)
users/create-faculty (POST)
users/create-admin (POST)

Student:
students (GET)
students/:id (GET)
students/:id (PATCH)
students/:id (DELETE)
students/my-profile

Faculty:
faculties(GET)
faculties/:id (GET)
faculties/:id (PATCH)
faculties/:id (DELETE)
faculties/my-profile

Admin:
admins (GET)
admins /:id (GET)
admins /:id (PATCH)
admins /:id (DELETE)
admins /my-profile

Auth:

auth/login
auth/refresh-token
auth/change-password
auth/forgot-password
auth/reset-password
