# 머니메이드(MoneyMade)

## 프로젝트 
### 개요
- 사용자가 자신의 자산과 입출금을 관리할 수 있는 서비스 ‘💰MoneyMade‘
- 내가 가지고있는 자산(개인계좌, 투자계좌)을 한눈에 보는 서비스 구축
- 내가 사용한 소비내역 입력을 통한 지출계획을 한눈에 보는 서비스 구축

### 배경
### 배포링크
https://dashing-sorbet-f9defc.netlify.app/

###기본아이디비밀번호

## 프로젝트 기술 스택
### Environments
<img src="https://img.shields.io/badge/intellij-000000?style=for-the-badge&logo=intellijidea&logoColor=white"><img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Development Stack
#### BackEnd

<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"><img src="https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white"><img src="https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"><img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"><img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"><img src="https://img.shields.io/badge/amazonrds-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white">
<img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"><img src="https://img.shields.io/badge/githubactions-181717?style=for-the-badge&logo=githubactions&logoColor=white">



### Communicatoin
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white">

## 프로젝트 진행 과정
- 피그마를 이용해 목업 디자인 스케치와 메인 디자인 
- 페이지 별 역할 분담
- 기능 구현
- 배포 테스트 및 기능 수정
- 배포

## 프로젝트 구현 내용
 <img width="607" alt="스크린샷 2023-08-20 오후 9 47 02" src="https://github.com/Taehwan2/seb44_main_010/assets/97010824/53098b63-769c-4555-b8ad-22e4cc98adbd">
 
1. Json 정보를 활용하여 User에 대한 정보를 받고, 정보를 DB에 저장하는 로직을 작성하였습니다.

<img width="635" alt="스크린샷 2023-08-20 오후 9 47 25" src="https://github.com/Taehwan2/seb44_main_010/assets/97010824/0dfeb2cd-50b4-41c8-a481-2a863cbf7f13">

2. Email API를 사용하여, 회원가입을 할 때 본인 이메일을 인증하는 로직을 작성하였습니다.

 <img width="612" alt="스크린샷 2023-08-20 오후 9 48 49" src="https://github.com/Taehwan2/seb44_main_010/assets/97010824/a3f8a73f-b549-4bd4-a979-dceb504a12e8">
 
3. Sprint security를 통해서 DB에 있는 정보를 확인하고 JWT토큰을 발급해주는 기능을 구현했습니다. 

<img width="634" alt="스크린샷 2023-08-20 오후 9 51 08" src="https://github.com/Taehwan2/seb44_main_010/assets/97010824/490e700a-6ecd-4d53-9275-d095634e6c96">

4. 로그인 성공시 , 사용자의 이름과 금융에 대한 정보(마이페이지)를 JSON으로 전달해주는 기능을 작성했습니다.
  
<img width="616" alt="스크린샷 2023-08-20 오후 9 52 06" src="https://github.com/Taehwan2/seb44_main_010/assets/97010824/af998630-638b-4a39-8ec2-0837e04defb8">
 
5. 연동이 되어있는 계좌에대한 정보와 , 부동산, 자동차 , 현금과 계좌의 비율을 담은 정보를 전달해주고 , 각 자산에 대한 CRUD기능을 활성화 시킨 기능을 작성하였습니다.

<img width="620" alt="스크린샷 2023-08-20 오후 9 53 22" src="https://github.com/Taehwan2/seb44_main_010/assets/97010824/8d3d9dd3-16a7-4cb1-bb83-543b4b69f719">

6. 사용자의 ID에 맞는 계좌의 결제 내역에서 지정된 날짜에 대한 구매내역을 불러오는 기능을 작성했습니다.
   
<img width="625" alt="스크린샷 2023-08-20 오후 9 53 39" src="https://github.com/Taehwan2/seb44_main_010/assets/97010824/5bbfa82a-b3d4-4bb2-b1b0-caab1fd69016">

<img width="624" alt="스크린샷 2023-08-20 오후 9 53 48" src="https://github.com/Taehwan2/seb44_main_010/assets/97010824/44c9a8bb-1baf-4fa0-a016-49b3fec8c15b">

7. 사용자의 ID에 맞는 계좌의 결제 내역에서 월별 결제내역을 불러오는 기능을 작성했습니다.

<img width="631" alt="스크린샷 2023-08-20 오후 9 54 00" src="https://github.com/Taehwan2/seb44_main_010/assets/97010824/c813c895-7c56-4149-a30d-1359cca86b77">

8.  사용자의 ID에 맞는 계좌의 결제 내역에서 일별 합계 결제내역을 불러오는 기능을 작성했습니다. 일별 합계는 합계테이블에서 따로 정보를 저장하고, 가져오는 형식을 사용하였습니다.

<img width="641" alt="스크린샷 2023-08-20 오후 9 54 10" src="https://github.com/Taehwan2/seb44_main_010/assets/97010824/ef929816-af26-49a7-81d5-729364d0a53b">

9. 사용자의 ID에 맞는 계좌의 결제 내역에서 카테고리별 합계 결제내역을 불러오는 기능을 작성했습니다. 카테고리별 합계는 카테고리 합계 테이블에서 따로 정보를 저장하고, 가져오는 형식을 사용하였습니다.


## 프로젝트 한계 및 개선 방안
1. 초반에 테이블 명세서와 API명세서를 자세하게 잡지 않고 가서 많은 수정이 있었다. -> 매일 한시간의 회의를 통해서 더 자세하게 명세서를 작성함으로 해결
2. 역할 분담 문제 거의 모든 기능을 혼자 맡게 되어서 분담의 문제가 생겼다. -> 기능 부분을 제외한 본인이 잘 할 수 있는 부분을 맡아서 해결
3. 코드 가독성 문제 기능이 계속 수정되어서 시간이 부족하게 되었고, 그로인해 빠르게 코드를 작성하다보니 중복된 코드와 가독성이 떨어졌다 -> 일부 코드를 클린 코드 원칙과 객체지향 원리를 사용해 가독성 개선
4. 중복된 데이터 반환 -> Redis를 통해서 중복된 데이터 반환을 해결했으나, 데이터의 크기가 작아서 실제 코드에선 제외

