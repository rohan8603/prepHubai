export const universities = [
  { id: "1", name: "RAJIV GANDHI PROUDYOGIKI VISHWAVIDYALAYA" },
  { id: "2", name: "DR. A.P.J. ABDUL KALAM TECHNICAL UNIVERSITY" },
  { id: "3", name: "MUMBAI UNIVERSITY" },
  { id: "4", name: "VISVESVARAYA TECHNOLOGICAL UNIVERSITY" },
  { id: "5", name: "ANNA UNIVERSITY" },
  { id: "6", name: "SAVITRIBAI PHULE PUNE UNIVERSITY" },
  { id: "7", name: "JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY" },
];

export const branches = [
  { id: "1", universityId: "1", name: "B.Tech" },
  { id: "2", universityId: "1", name: "BCA" },
  { id: "3", universityId: "1", name: "MBA" },

  { id: "4", universityId: "2", name: "B.Tech" },
  { id: "5", universityId: "2", name: "BCA" },
  { id: "6", universityId: "2", name: "MBA" },

  { id: "7", universityId: "3", name: "B.Tech" },
  { id: "8", universityId: "4", name: "B.Tech" },
  { id: "9", universityId: "5", name: "B.Tech" },
  { id: "10", universityId: "6", name: "B.Tech" },
  { id: "11", universityId: "7", name: "B.Tech" },
];

export const courses = [
  { id: "1", branchId: "1", name: "CSE" },
  { id: "2", branchId: "1", name: "ECE" },
  { id: "3", branchId: "1", name: "Mechanical" },
  { id: "4", branchId: "1", name: "Civil" },

  { id: "5", branchId: "4", name: "CSE" },
  { id: "6", branchId: "4", name: "ECE" },

  { id: "7", branchId: "2", name: "Computer Applications" },
  { id: "8", branchId: "5", name: "Computer Applications" },

  { id: "9", branchId: "3", name: "Finance" },
  { id: "10", branchId: "3", name: "Marketing" },
];

export const semesters = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
  { number: 6 },
  { number: 7 },
  { number: 8 },
];

export const subjects = [

  // 1st Semester
  { id: "1", courseName: "CSE", semesterNumber: 1, name: "MATHEMATICS-1" },
  { id: "2", courseName: "CSE", semesterNumber: 1, name: "CHEMISTRY" },
  { id: "3", courseName: "CSE", semesterNumber: 1, name: "ENGINEERING GRAPHICS" },
  { id: "4", courseName: "CSE", semesterNumber: 1, name: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING" },
  { id: "5", courseName: "CSE", semesterNumber: 1, name: "ENGLISH" },

  // 2nd Semester
  { id: "6", courseName: "CSE", semesterNumber: 2, name: "MATHEMATICS-2" },
  { id: "7", courseName: "CSE", semesterNumber: 2, name: "PHYSICS" },
  { id: "8", courseName: "CSE", semesterNumber: 2, name: "BASIC CIVIL ENGINEERING & MACHANICS" },
  { id: "9", courseName: "CSE", semesterNumber: 2, name: "BASIC MECHANICAL ENGINEERING" },
  { id: "10", courseName: "CSE", semesterNumber: 2, name: "BASIC COMPUTER ENGINEERING" },

  // 3rd Semester
  { id: "11", courseName: "CSE", semesterNumber: 3, name: "DATA STRUCTURES" },
  { id: "12", courseName: "CSE", semesterNumber: 3, name: "DISCRETE MATHEMATICS" },
  { id: "13", courseName: "CSE", semesterNumber: 3, name: "DIGITAL SYSTEMS" },
  { id: "14", courseName: "CSE", semesterNumber: 3, name: "OOPM" },
  { id: "15", courseName: "CSE", semesterNumber: 3, name: "EEE" },

  // 4th Semester
  { id: "16", courseName: "CSE", semesterNumber: 4, name: "MATHEMATICS-3" },
  { id: "17", courseName: "CSE", semesterNumber: 4, name: "ANALYSIS DESIGN OF ALGORITHM" },
  { id: "18", courseName: "CSE", semesterNumber: 4, name: "SOFTWARE ENGINEERING" },
  { id: "19", courseName: "CSE", semesterNumber: 4, name: "COMPUTER ORG. AND ARCHITECTURE" },
  { id: "20", courseName: "CSE", semesterNumber: 4, name: "OPERATING SYSTEM" },

  // 5th Semester
  { id: "21", courseName: "CSE", semesterNumber: 5, name: "THEORY OF COMPUTATION" },
  { id: "22", courseName: "CSE", semesterNumber: 5, name: "DATABASE MANAGEMENT SYSTEMS" },
  { id: "23", courseName: "CSE", semesterNumber: 5, name: "CYBER SECURITY" },
  { id: "24", courseName: "CSE", semesterNumber: 5, name: "INTERNET AND WEB TECHNOLOGY" },

  // 6th Semester
  { id: "25", courseName: "CSE", semesterNumber: 6, name: "COMPUTER NETWORKS" },
  { id: "26", courseName: "CSE", semesterNumber: 6, name: "MACHINE LEARNING" },
  { id: "27", courseName: "CSE", semesterNumber: 6, name: "ADVANCED COMPUTER ARCHITECTURE" },
  { id: "28", courseName: "CSE", semesterNumber: 6, name: "PROJECT MANAGEMENT" },

  // 7th Semester
  { id: "29", courseName: "CSE", semesterNumber: 7, name: "SOFTWARE ARCHITECTURES" },
  { id: "30", courseName: "CSE", semesterNumber: 7, name: "BIG DATA" },
  { id: "31", courseName: "CSE", semesterNumber: 7, name: "CRYPTOGRAPHY AND INFORMATION SECURITY" },

  // 8th Semester
  { id: "32", courseName: "CSE", semesterNumber: 8, name: "INTERNET OF THINGS" },
  { id: "33", courseName: "CSE", semesterNumber: 8, name: "CLOUD COMPUTING" },
  { id: "34", courseName: "CSE", semesterNumber: 8, name: "IMAGE PROCESSING AND COMPUTER VISION" },

];

export const subjectContent = {

  1: {
    notes: "Mathematics-1 notes available.",
    pdfs: [{ title: "Mathematics PDF", link: "https://your-link.com/math1.pdf" }],
    videos: [{ title: "Mathematics Lecture", link: "https://youtube.com/playlist?list=PLg2LVpcRrOF6-vZw95tkkBxbDQ1_Dwn_Y&si=awbMulAiydaT_m-s" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  2: {
    notes: "Chemistry notes available.",
    pdfs: [{ title: "Chemistry PDF", link: "https://your-link.com/chemistry.pdf" }],
    videos: [{ title: "Chemistry Lecture", link: "https://youtube.com/playlist?list=PLg2LVpcRrOF6Sn9UO_1Yict2fJYKuQQHN&si=heNwQMWw47XPmnIM" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  3: {
    notes: "Engineering Graphics notes available.",
    pdfs: [{ title: "EG PDF", link: "https://your-link.com/eg.pdf" }],
    videos: [{ title: "EG Lecture", link: "https://youtube.com/playlist?list=PLg2LVpcRrOF5vb8PSCMvTsWuedyB05zFs&si=YHFIVlD0G3mrbMYr" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  4: {
    notes: "BEEE notes available.",
    pdfs: [{ title: "BEEE PDF", link: "https://your-link.com/beee.pdf" }],
    videos: [{ title: "BEEE Lecture", link: "https://youtube.com/playlist?list=PLg2LVpcRrOF4-xSDFgqQgv38yC_YHEkTc&si=AzkDU2p1E7pXuarq" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  5: {
    notes: "English notes available.",
    pdfs: [{ title: "English PDF", link: "https://your-link.com/english.pdf" }],
    videos: [{ title: "English Lecture", link: "https://youtube.com/playlist?list=PLg2LVpcRrOF7Wnzpc9NNKpXLDVdAvRl2I&si=HcrTE4r1GwJLYpXL" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  6: {
    notes: "Mathematics-2 notes available.",
    pdfs: [{ title: "Math-2 PDF", link: "https://your-link.com/math2.pdf" }],
    videos: [{ title: "Math-2 Lecture", link: "https://youtube.com/playlist?list=PLg2LVpcRrOF4S_GMRX_lOC2z52iIcSr1R&si=slhRh6Zoxz7FrfC2" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  7: {
    notes: "Physics notes available.",
    pdfs: [{ title: "Physics PDF", link: "https://your-link.com/physics.pdf" }],
    videos: [{ title: "Physics Lecture", link: "https://youtube.com/playlist?list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&si=drkyD84h_wqYAAFP" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  8: {
    notes: "BCE notes available.",
    pdfs: [{ title: "BCE PDF", link: "https://your-link.com/pps.pdf" }],
    videos: [{ title: "BCE Lecture", link: "https://youtube.com/playlist?list=PLg2LVpcRrOF5zgWfkmWFTApfinhDi2nwA&si=HqAqSlCwcoEhxcbr" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  9: {
    notes: "BME notes available.",
    pdfs: [{ title: "BME PDF", link: "https://your-link.com/bme.pdf" }],
    videos: [{ title: "BME Lecture", link: "https://youtube.com/playlist?list=PLg2LVpcRrOF7L4FknzcfxrnMin-03WUHs&si=ZZOgJHSKeh7QpPhj" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  10: {
    notes: "BCE&M notes available.",
    pdfs: [{ title: "bce&m PDF", link: "https://your-link.com/cs.pdf" }],
    videos: [{ title: "bce&m Lecture", link: "https://youtube.com/playlist?list=PLg2LVpcRrOF4DUVqLrAcv5ahv_5HQUalu&si=UL-aIfi_U_6FERD-" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  11: {
    notes: "Data Structures notes available.",
    pdfs: [{ title: "DS PDF", link: "https://your-link.com/ds.pdf" }],
    videos: [{ title: "DS Lecture", link: "https://youtube.com/playlist?list=PLL7liBDYa4YadkVMCZHz0HZqeSi6dUmLE&si=dP1T0B68Wsi8hVXn" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  12: {
    notes: "Discrete Mathematics notes available.",
    pdfs: [{ title: "DM PDF", link: "https://your-link.com/dm.pdf" }],
    videos: [{ title: "DM Lecture", link: "https://youtube.com/playlist?list=PLVbxzb9b13LCnosP9Nc0-wGR4Wn7LrfiJ&si=Qbq_KF30MSqJbTAo" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  13: {
    notes: "EEE notes available.",
    pdfs: [{ title: "EEE PDF", link: "https://your-link.com/de.pdf" }],
    videos: [{ title: "EEE Lecture", link: "https://youtube.com/playlist?list=PLL7liBDYa4YaJ538RmxMWJnZYrKX9Tbi8&si=5xjRqgA4mgbEyTy7" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  14: {
    notes: "OOPM notes available.",
    pdfs: [{ title: "oopm PDF", link: "https://your-link.com/java.pdf" }],
    videos: [{ title: "oopm Lecture", link: "https://youtube.com/playlist?list=PLtdX3M0E1clJVljVULwFa6FABmu3qvr80&si=D2OaV3JALY60YIDv" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  15: {
    notes: "DIGITAL Systems notes available.",
    pdfs: [{ title: "OS PDF", link: "https://your-link.com/os.pdf" }],
    videos: [{ title: "OS Lecture", link: "https://youtube.com/playlist?list=PLtdX3M0E1clIXb_dh4Clqww83_Z3uaZaz&si=nYJT7Q15FW3TLkIQ" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  16: {
    notes: "mathematics-3 notes available.",
    pdfs: [{ title: "DBMS PDF", link: "https://your-link.com/dbms.pdf" }],
    videos: [{ title: "DBMS Lecture", link: "https://youtube.com/playlist?list=PLVbxzb9b13LCk7Ros9lixXqShEgw7xuD3&si=sdQm5o91hNBd_hKx" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  17: {
    notes: "ada notes available.",
    pdfs: [{ title: "ada PDF", link: "https://drive.google.com/file/d/13DkzPpk9chVOqJtLZxygN5vg0BFUckQJ/view?usp=drive_link" }],
    videos: [{ title: "ada Lecture", link: "https://youtube.com/watch?v=cn" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  18: {
    notes: "software engineering notes available.",
    pdfs: [{ title: "se PDF", link: "https://drive.google.com/file/d/15KISk8oT3A11ZcQqaVAvvlJCnZvuDzMx/view?usp=drive_link" }],
    videos: [{ title: "se Lecture", link: "https://youtube.com/watch?v=toc" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  19: {
    notes: "coa notes available.",
    pdfs: [{ title: "coa PDF", link: "" }],
    videos: [{ title: "coa Lecture", link: "https://youtube.com/watch?v=se" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  20: {
    notes: "operating systems notes available.",
    pdfs: [{ title: "os PDF", link: "https://your-link.com/python.pdf" }],
    videos: [{ title: "os Lecture", link: "https://youtube.com/watch?v=python" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  21: {
    notes: "TOC notes available.",
    pdfs: [{ title: "TOC PDF", link: "https://your-link.com/toc.pdf" }],
    videos: [{ title: "TOC Lecture", link: "https://youtube.com/watch?v=toc" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  22: {
    notes: "DBMS notes available.",
    pdfs: [{ title: "DBMS PDF", link: "https://your-link.com/dbms.pdf" }],
    videos: [{ title: "DBMS Lecture", link: "https://youtube.com/watch?v=dbms" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  23: {
    notes: "Cyber Security notes available.",
    pdfs: [{ title: "Cyber Security PDF", link: "https://your-link.com/cyber.pdf" }],
    videos: [{ title: "Cyber Security Lecture", link: "https://youtube.com/watch?v=cyber" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  24: {
    notes: "Internet and Web Technology notes available.",
    pdfs: [{ title: "IWT PDF", link: "https://your-link.com/iwt.pdf" }],
    videos: [{ title: "IWT Lecture", link: "https://youtube.com/watch?v=iwt" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },


  25: {
    notes: "Machine Learning notes available.",
    pdfs: [{ title: "ML PDF", link: "https://your-link.com/ml.pdf" }],
    videos: [{ title: "ML Lecture", link: "https://youtube.com/watch?v=ml" }],
   pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  26: {
    notes: "Advanced Computer Architecture notes available.",
    pdfs: [{ title: "ACA PDF", link: "https://your-link.com/aca.pdf" }],
    videos: [{ title: "ACA Lecture", link: "https://youtube.com/watch?v=aca" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  27: {
    notes: "Project Management notes available.",
    pdfs: [{ title: "PM PDF", link: "https://your-link.com/pm.pdf" }],
    videos: [{ title: "PM Lecture", link: "https://youtube.com/watch?v=pm" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  28: {
    notes: "computer network notes available.",
    pdfs: [{ title: "SA PDF", link: "https://your-link.com/sa.pdf" }],
    videos: [{ title: "SA Lecture", link: "https://youtube.com/watch?v=sa" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  29: {
    notes: "Big Data notes available.",
    pdfs: [{ title: "Big Data PDF", link: "https://your-link.com/bigdata.pdf" }],
    videos: [{ title: "Big Data Lecture", link: "https://youtube.com/watch?v=bigdata" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  30: {
    notes: "Cryptography notes available.",
    pdfs: [{ title: "Crypto PDF", link: "https://your-link.com/crypto.pdf" }],
    videos: [{ title: "Crypto Lecture", link: "https://youtube.com/watch?v=crypto" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  31: {
    notes: "software architectures notes available.",
    pdfs: [{ title: "IoT PDF", link: "https://your-link.com/iot.pdf" }],
    videos: [{ title: "IoT Lecture", link: "https://youtube.com/watch?v=iot" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  32: {
    notes: "Cloud Computing notes available.",
    pdfs: [{ title: "Cloud PDF", link: "https://your-link.com/cloud.pdf" }],
    videos: [{ title: "Cloud Lecture", link: "https://youtube.com/watch?v=cloud" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  33: {
    notes: "Image Processing and Computer Vision notes available.",
    pdfs: [{ title: "IPCV PDF", link: "https://your-link.com/ipcv.pdf" }],
    videos: [{ title: "IPCV Lecture", link: "https://youtube.com/watch?v=ipcv" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

  34: {
    notes: "internet of things notes available.",
    pdfs: [{ title: "IPCV PDF", link: "https://your-link.com/ipcv.pdf" }],
    videos: [{ title: "IPCV Lecture", link: "https://youtube.com/watch?v=ipcv" }],
    pyq: [
            { year: "2021", link: "https://your-link.com/math1-2021.pdf" },
            { year: "2022", link: "https://your-link.com/math1-2022.pdf" },
            { year: "2023", link: "https://your-link.com/math1-2023.pdf" },
            { year: "2024", link: "https://your-link.com/math1-2024.pdf" },
            { year: "2025", link: "https://your-link.com/math1-2025.pdf" }
          ]
  },

};