import { ApplicantDataType, TransactionType } from "@/types/types";

const columns = [
   { name: "FULL NAME", uid: "name", sortable: true },
   { name: "CONTACT NO.", uid: "contactNo", sortable: true },
   { name: "DATE APPLIED", uid: "dateApplied" },
   { name: "POSITION", uid: "position", sortable: true },
   { name: "TEAM", uid: "team" },
   { name: "STATUS", uid: "status", sortable: true },
   { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
   { name: "Passed", uid: "passed" },
   { name: "Unselected", uid: "unselected" },
   { name: "Pending", uid: "pending" },
];

const users: ApplicantDataType[] = [
   {
      id: 1,
      name: "Tony Reichert",
      position: "CEO",
      team: "Management",
      dateApplied: '2023-10-09',
      status: "active",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      createdBy: 'admin',
      email: "tony.reichert@example.com",
   },
   {
      id: 2,
      name: "Zoey Lang",
      position: "Tech Lead",
      team: "Development",
      dateApplied: '2023-10-09',
      status: "active",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      createdBy: 'admin',
      email: "zoey.lang@example.com",
   },
   {
      id: 3,
      name: "Jane Fisher",
      position: "Sr. Dev",
      team: "Development",
      dateApplied: '2023-10-09',
      status: "active",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      createdBy: 'admin',
      email: "jane.fisher@example.com",
   },
   {
      id: 4,
      name: "William Howard",
      position: "C.M.",
      team: "Marketing",
      dateApplied: '2023-10-09',
      status: "active",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      createdBy: 'admin',
      email: "william.howard@example.com",
   },
   {
      id: 5,
      name: "Kristen Copper",
      position: "S. Manager",
      team: "Sales",
      dateApplied: '2023-10-09',
      status: "active",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      createdBy: 'admin',
      email: "kristen.cooper@example.com",
   },
   {
      id: 6,
      name: "Brian Kim",
      position: "P. Manager",
      team: "Management",
      dateApplied: '2023-10-09',
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "brian.kim@example.com",
      status: "active",
      createdBy: 'admin',
   },
   {
      id: 7,
      name: "Michael Hunt",
      position: "Designer",
      team: "Design",
      dateApplied: '2023-10-09',
      status: "active",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
      createdBy: 'admin',
      email: "michael.hunt@example.com",
   },
   {
      id: 8,
      name: "Samantha Brooks",
      position: "HR Manager",
      team: "HR",
      dateApplied: '2023-10-09',
      status: "active",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
      createdBy: 'admin',
      email: "samantha.brooks@example.com",
   },
   {
      id: 9,
      name: "Frank Harrison",
      position: "F. Manager",
      team: "Finance",
      dateApplied: '2023-10-09',
      status: "active",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?img=4",
      createdBy: 'admin',
      email: "frank.harrison@example.com",
   },
   {
      id: 10,
      name: "Emma Adams",
      position: "Ops Manager",
      team: "Operations",
      dateApplied: '2023-10-09',
      status: "active",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?img=5",
      createdBy: 'admin',
      email: "emma.adams@example.com",
   },
   {
      id: 11,
      name: "Brandon Stevens",
      position: "Jr. Dev",
      team: "Development",
      dateApplied: '2023-10-09',
      status: "pending",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?img=8",
      createdBy: 'admin',
      email: "brandon.stevens@example.com",
   },
   {
      id: 12,
      name: "Megan Richards",
      position: "P. Manager",
      team: "Product",
      dateApplied: '2023-10-09',
      status: "pending",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?img=10",
      createdBy: 'admin',
      email: "megan.richards@example.com",
   },
   {
      id: 13,
      name: "Oliver Scott",
      position: "S. Manager",
      team: "Security",
      dateApplied: '2023-10-09',
      status: "active",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?img=12",
      createdBy: 'admin',
      email: "oliver.scott@example.com",
   },
   {
      id: 14,
      name: "Grace Allen",
      position: "M. Specialist",
      team: "Marketing",
      dateApplied: '2023-10-09',
      status: "active",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?img=16",
      createdBy: 'admin',
      email: "grace.allen@example.com",
   },
   {
      id: 15,
      name: "Noah Carter",
      position: "IT Specialist",
      team: "I. Technology",
      dateApplied: '2023-10-09',
      status: "pending",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?img=15",
      createdBy: 'admin',
      email: "noah.carter@example.com",
   },
   {
      id: 16,
      name: "Ava Perez",
      position: "Manager",
      team: "Sales",
      dateApplied: '2023-10-09',
      status: "pending",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?img=20",
      createdBy: 'admin',
      email: "ava.perez@example.com",
   },
   {
      id: 17,
      name: "Liam Johnson",
      position: "Data Analyst",
      team: "Analysis",
      dateApplied: '2023-10-09',
      status: "pending",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?img=33",
      createdBy: 'admin',
      email: "liam.johnson@example.com",
   },
   {
      id: 18,
      name: "Sophia Taylor",
      position: "QA Analyst",
      team: "Testing",
      dateApplied: '2023-10-09',
      status: "pending",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?img=29",
      createdBy: 'admin',
      email: "sophia.taylor@example.com",
   },
   {
      id: 19,
      name: "Lucas Harris",
      position: "Administrator",
      team: "Information Technology",
      dateApplied: '2023-10-09',
      status: "pending",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?img=50",
      createdBy: 'admin',
      email: "lucas.harris@example.com",
   },
   {
      id: 20,
      name: "Mia Robinson",
      position: "Coordinator",
      team: "Operations",
      dateApplied: '2023-10-09',
      status: "pending",
      contactNo: "+639606528174",
      avatar: "https://i.pravatar.cc/150?img=45",
      createdBy: 'admin',
      email: "mia.robinson@example.com",
   },
];

const transactionColumns = [
   { name: "APPOINTMENT", uid: "appointment" },
   { name: "INTERVIEWER/EVALUATOR", uid: "interviewer" },
   { name: "DATE", uid: "date" },
   { name: "TIME", uid: "time" },
   { name: "STATUS", uid: "status" },
   { name: "ACTIONS", uid: "actions" },
];

const transactionStatusOptions = [
   { name: "Passed", uid: "passed" },
   { name: "Failed", uid: "failed" },
   { name: "Pending", uid: "pending" },
];

const transactionsList: TransactionType[] = [
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 1,
      appointment: 'Coding Assessment',
      interviewer: 'William Howard',
      date: '2023-10-01',
      timeStart: '09:30',
      timeEnd: '10:00',
      time: '9:30 - 10:00',
      status: 'passed',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 1,
      interviewer: 'Jane Fisher',
      appointment: 'Initial Interview',
      date: '2023-10-01',
      timeStart: '10:30',
      timeEnd: '11:00',
      time: '10:30 - 11:00',
      status: 'passed',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 1,
      interviewer: 'Tony Reichert',
      appointment: 'Final Interview',
      date: '2023-10-01',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'pending',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 2,
      interviewer: 'Ava Perez',
      appointment: 'Initial Interview',
      date: '2023-10-05',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'passed',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 2,
      interviewer: 'Sophia Taylor',
      appointment: 'Final Interview',
      date: '2023-10-05',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'pending',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 3,
      interviewer: 'Tony Reichert',
      appointment: 'Final Interview',
      date: '2023-10-05',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'pending',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 4,
      interviewer: 'Noah Carter',
      appointment: 'Final Interview',
      date: '2023-10-05',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'pending',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 5,
      interviewer: 'Tony Reichert',
      appointment: 'Final Interview',
      date: '2023-10-05',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'pending',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 6,
      interviewer: 'Oliver Scott',
      appointment: 'Initial Interview',
      date: '2023-10-09',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'passed',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 6,
      interviewer: 'Noah Carter',
      appointment: 'Final Interview',
      date: '2023-10-10',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'passed',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 6,
      interviewer: 'Tony Reichert',
      appointment: 'Job Offer',
      date: '2023-10-10',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'pending',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 7,
      interviewer: 'Oliver Scott',
      appointment: 'Final Interview',
      date: '2023-10-10',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'pending',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 8,
      interviewer: 'Tony Reichert',
      appointment: 'Final Interview',
      date: '2023-10-10',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'pending',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 9,
      interviewer: 'William Howard',
      appointment: 'Final Interview',
      date: '2023-10-10',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'pending',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 10,
      interviewer: 'Tony Reichert',
      appointment: 'Final Interview',
      date: '2023-10-10',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'pending',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 13,
      interviewer: 'Grace Allen',
      appointment: 'Initial Interview',
      date: '2023-10-10',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'passed',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 13,
      interviewer: 'William Howard',
      appointment: 'Final Interview',
      date: '2023-10-10',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'pending',
      createdBy: 'admin',
   },
   {
      id: Math.floor( Math.random() * 10000 ),
      applicantID: 14,
      interviewer: 'Kristen Copper',
      appointment: 'Final Interview',
      date: '2023-10-10',
      timeStart: '01:30',
      timeEnd: '02:00',
      time: '01:30 - 02:00',
      status: 'pending',
      createdBy: 'admin',
   },
]


export { columns, users, statusOptions, transactionColumns, transactionStatusOptions, transactionsList };
