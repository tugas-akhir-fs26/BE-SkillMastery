Cara Clone Repo :

    1. git clone https://github.com/tugas-akhir-fs26/BE-SkillMastery.git
    2. npm install untuk menginstall depedency
    3. npm run dev untuk menjalankan server

Dokumentasi API 

Url : https://skillmastery.adaptable.app/
1. Register User

    method : POST

    API URL : https://skillmastery.adaptable.app/auth/register

![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/cc199875-fa58-462e-a0f1-373bc2b5d260)


2. Login User

   method : POST

   API URL  :  https://skillmastery.adaptable.app/auth/login


![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/bb902201-227d-4eb4-9a6a-3baf625baf8c)


3. Get All Course

   
   Method : GET

   API URL : https://skillmastery.adaptable.app/courses

![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/f67b0991-e5fd-42a6-a4f1-ea167715aa09)


4. Get Data Course By ID

   Method : GET

   API URL :  https://skillmastery.adaptable.app/courses/${courseID}

   ![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/77c829d5-028f-4558-8051-cea62fe0d66a)


5. Add Course 

    Method : POST 

    API URL :  https://skillmastery.adaptable.app/courses

    *Note : memerlukan token dari API LOGIN*
   
  ![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/69194386-5353-4db4-a749-3561481c2820)


  ![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/436830ee-63b9-41c1-a905-0493db310ebf)


6. Delete Course
   
    Method : Delete
   
    API URL : https://skillmastery.adaptable.app/courses/${courseID}
   
    *Note : memerlukan token dari API LOGIN*
   
   ![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/a63604f9-81da-4b25-9b70-3e022cd88297)


7. Update Course
   
     Method : PUT
   
   API URL : https://skillmastery.adaptable.app/courses/{courseID}
   
   *Note : memerlukan token dari API LOGIN*
   
![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/9c246744-d049-4a6b-a101-4e20c726e6db)


8. Cart 

   Method : GET, DELETE, POST

   BASE API URL : https://skillmastery.adaptable.app/cart/

   Get data cart by id user:  https://skillmastery.adaptable.app/cart/${userID}
   
    
  ![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/2e550e0b-1f21-423a-819c-b05fe9328404)


  Add to cart :  https://skillmastery.adaptable.app/cart/
  
  ![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/488f0e11-dc81-44c8-a362-bf507305cc17)

  Delete cart by id : https://skillmastery.adaptable.app/cart/course/${id}

  ![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/3cb6d121-dec1-4c0e-9e3b-4ee88f254ed1)


9. Reviews

    Method : POST, GET
    
    API URL : https://skillmastery.adaptable.app/reviews/

    Get Reviews By Course ID : 

   ![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/4c541002-7b69-4939-abf2-2368967a3ba8)


  Add review by User ID : 
  
  ![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/f699e430-ff2d-4155-aeb6-1d2caef1b61e)

10. Mentor

    Method : POST, GET

    Get Mentor By Mentor ID :
    
    API URL : https://skillmastery.adaptable.app/mentors/${mentorID}

    ![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/9e80e0be-fda4-418f-9e85-64eae9434367)

    Create Mentor By Id User:
    
     API URL : https://skillmastery.adaptable.app/mentors/${userID}

    ![image](https://github.com/tugas-akhir-fs26/BE-SkillMastery/assets/89026308/d90f731e-dba4-4458-ac2b-39b0dd98de08)

    


    





