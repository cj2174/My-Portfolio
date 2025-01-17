import React from "react";
import myphoto from "../assets/img/my-photo.jpg";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-pink-100 via-white to-pink-100 min-h-screen py-20 px-6 flex flex-col items-center">
      {/* 전체 레이아웃 */}
      <div className="max-w-4xl w-full space-y-12 mt-20">
        {/* 헤더 */}
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-red-400 mb-4">
            Hi, I'm Yunseo 👋
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            사용자 경험을 최우선으로 생각하는,{" "}
            <span className="font-bold text-red-400">
              신입 프론트엔드 개발자 최윤서
            </span>
            입니다.
          </p>
        </header>

        {/* 프로필 섹션 */}
        <section className="bg-white rounded-xl p-6 space-y-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">👤 Profile</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={myphoto}
              alt="Profile"
              className="w-32 h-33 shadow-md object-cover transform transition-all duration-500 hover:scale-110"
            />
            <div className="flex flex-col space-y-5">
              <div>
                <strong className="text-gray-700">🎂 Birth:</strong>{" "}
                <span>2001.09.27</span>
              </div>
              <div>
                <strong className="text-gray-700">✉️ E-Mail:</strong>{" "}
                <span>cj2174@naver.com</span>
              </div>
              <div>
                <strong className="text-gray-700">🐱 Github:</strong>{" "}
                <a
                  href="https://github.com/cj2174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                >
                  github.com/cj2174
                </a>
              </div>
              <div>
                <strong className="text-gray-700">💾 Tech Blog:</strong>{" "}
                <a
                  href="https://yo09.tistory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                >
                  yo09.tistory.com
                </a>
              </div>
              <div>
                <strong className="text-gray-700">🐻‍❄️ Notion:</strong>{" "}
                <a
                  href="https://www.notion.so/d59a225a590a41e58138d68cd513d290?pvs=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                >
                  학습 내용 정리
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Me 섹션 */}
        <section className="bg-white rounded-xl p-6 space-y-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🙋‍♂️ About Me</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-3">
            <li>🌱 유지보수가 쉬운 SW를 개발하고 싶어요.</li>
            <li>🌱 개발 과정에서 항상 사용자의 입장을 먼저 생각해요.</li>
            <li>
              🌱 팀원과의 원활한 협업을 통해 높은 완성도의 프로젝트를 만드는
              것을 목표로 하고 있어요.
            </li>
          </ul>
        </section>

        {/* Educations 섹션 */}
        <section className="bg-white rounded-xl p-6 space-y-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📖 Educations
          </h2>
          <div className="space-y-6">
            <div>
              <p>
                <strong>Sungkyul Univ. </strong>
                <span className="italic">Computer Science</span>
              </p>
              <p className="text-sm text-gray-600">
                2021.03 ~ 2025.02. (Graduated) | 학점 4.05 / 4.5
              </p>
            </div>
            <ul className="pl-5 list-disc text-gray-700 space-y-2">
              <li>2021년: IT공과대학 학생회 기획차장</li>
              <li>2022년: IT공과대학 학생회 기획부장, 성결튜터링 멘토</li>
              <li>2023년: 컴퓨터공학과 학생회장, 데이터베이스 교과목 튜터</li>
              <li>
                2024년: 24-1학기 학과 수석, 4학년 과대, 여러 교과목 튜터 활동
              </li>
            </ul>
          </div>
        </section>

        {/* Activities 섹션 */}
        <section className="bg-white rounded-xl p-6 space-y-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🎒 Activities
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-3">
            <li>엘리스 재단 청소년 SW 동행 프로젝트 대학생 멘토진 활동</li>
            <li>
              프로그래머스 데브코스(클라우드 기반 프론트엔드 엔지니어링 3기)
            </li>
          </ul>
        </section>

        {/* Certifications 섹션 */}
        <section className="bg-white rounded-xl p-6 space-y-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🏅 Certifications
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-3">
            <li>웹디자인기능사 (2024.04.09) - 한국산업인력공단</li>
            <li>정보처리기사 (2024.06.18) - 한국산업인력공단</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
