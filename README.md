# Lifemanager v5.1.0

## 🌟 서비스 소개
<p align='center'>
<img width='200px' src='https://i.imgur.com/hpneYdE.png)'>
</p>

⏱ 하루동안 한 일을 기록하면 유용한 정보들을 시각화해서 보여주는 웹 어플리케이션 ⏱

배포 : [https://lifemanager.pkiop.me](https://lifemanager.pkiop.me)

### [개발 배경](https://github.com/pkiop/lifemanager/wiki/%EA%B0%9C%EB%B0%9C-%EB%B0%B0%EA%B2%BD)


<p align='center'>
    <img src="https://img.shields.io/badge/Typescript-v4.0.3-blue?logo=typescript"/>
    <img src="https://img.shields.io/badge/React-v17.0.1-blue?logo=React"/>
    <img src="https://img.shields.io/badge/styled components-v5.2.1-pink?logo=react">
    <img src="https://img.shields.io/badge/storybook-v6.1.10-ff69b4?logo=storybook"/>
    <img src="https://img.shields.io/badge/aws amplify-v3.3.13-orange?logo=amazon"/>
    <img src="https://img.shields.io/badge/aws appsync-v4.0.1-orange?logo=amazon"/>
    <img src="https://img.shields.io/badge/graphql-v15.4.0-pink?logo=graphql">
    <img src="https://img.shields.io/badge/apollo/client-v3.3.6-violet?">
</p>
    
## 🌟 주요 기능

### 👌 로그인

<p align='center'>
  <img src="https://i.imgur.com/6Op9ffA.png"/>
</p>

* 구글 계정으로 OAuth인증을 통해 로그인 할 수 있습니다.
* AWS의 cognito를 이용해서 인증하고 앱에 할당된 AWS 리소스 접근권한을 얻습니다. 
1. cognito의 소셜로그인 활용 인증 및 로그인

<p align='center'>
  <img src="https://i.imgur.com/cayJ1tS.png"/>
</p>

2. 해당 인증 정보로 앱 AWS 리소스 접근

<p align='center'>
  <img width='400px' src="https://i.imgur.com/2fauXLL.png"/>
</p>

### 👌 메인 페이지 

<p align='center'>
  <img src="https://i.imgur.com/OfcRKIR.png"/>
</p>

#### 🧐 날짜 선택

<p align='center'>
  <img src="https://i.imgur.com/ZwZ7NaV.png"/>
</p>

* 확인하고 싶은 날짜를 선택합니다.

#### 🧐 로그아웃

<p align='center'>
  <img src="https://i.imgur.com/0XwLErm.png"/>
</p>

* 로그아웃 버튼을 눌러 로그아웃 할 수 있습니다.

#### 🧐 목표와 진행상황 확인

<p align='center'>
  <img src="https://i.imgur.com/ft58UEm.png"/>
</p>

* 사용자별로 설정한 목표에 따라 진행상황 / 목표까지 남은 시간을 계산한 결과를 보여줍니다.

#### 🧐 카테고리별 진행상황 시각화

<p align='center'>
  <img src="https://i.imgur.com/JM5UECe.png"/>
</p>

* billboard.js 라이브러리 활용해서 카테고리별로 지정한 색에 따라 한눈에 진행상황 확인할 수 있도록 파이 그래프를 보여줍니다.

#### 🧐 기록 확인

<p align='center'>
  <img width='300px' src="https://i.imgur.com/gH3vhi2.png"/>
</p>

* 로그인한 유저 & 선택한 날짜에 해당하는 기록들을 보여줍니다.

#### 🧐 기록 입력

<p align='center'>
  <img src="https://i.imgur.com/MAvCAkA.png"/>
  <img src="https://i.imgur.com/4PaVjla.png"/>
</p>

* 하단 바의 + 버튼을 눌러 기록을 추가할 수 있습니다.
* 제목, 시작시간, 종료시간(선택), 카테고리, 활용한 시간인지 여부를 입력하고 Add Recode를 클릭하면 기록이 추가됩니다.
* 잘못된 입력에 대해서 에러메세지를 보여줍니다.

#### 🧐 기록 수정 및 삭제

<p align='center'>
  <img src="https://i.imgur.com/UmHAlBL.gif"/>
</p>

* 수정을 원하는 기록을 클릭하면 해당 기록을 수정할 수 있습니다.
* Delete 버튼을 눌러 기록을 삭제할 수 있습니다.

## 🌟 배포

![image](https://user-images.githubusercontent.com/34783156/104201255-e465a580-546c-11eb-9dc9-5fd9e05aba38.png)

* pkiop.me DNS를 Route53으로 설정한 후 배포 S3에 연결된 CloudFront로 보내도록 설정합니다.
* CloudFront에서 SSL 인증을 해서 https로만 앱에 접근 가능하도록 합니다.
* S3의 Static Web Hosting을 이용해서 Frontend 앱을 배포합니다.
* 앱에서 인증 / DB데이터 조작이 필요할 때마다 AWS Cognito, AppSync 서비스를 활용해서 해당 기능을 이용합니다.

## History

[v1.5.1](https://github.com/pkiop/lifemanager/wiki/v1.5.1)  
[v2.0.0](https://github.com/pkiop/lifemanager/wiki/v2.0.0)  
[v3.0.0](https://github.com/pkiop/lifemanager/wiki/v3.0.0)  
[v4.0.0](https://github.com/pkiop/lifemanager/wiki/v4.0.0)  



