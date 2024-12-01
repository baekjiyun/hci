import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import RadioPlaybackModal from "../components/RadioPlayModal";

// 각 라디오에 해당하는 오디오 파일 임포트
import radio1 from "../assets/1ai.mp3";
import radio2 from "../assets/1.mp3";
import radio3 from "../assets/2ai.mp3";
import radio4 from "../assets/2.mp3";

const RadioList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [selectedAudioSrc, setSelectedAudioSrc] = useState(null); // 선택된 오디오 소스 상태
  const [selectedUrl, setSelectedUrl] = useState(null);

  // 라디오 리스트 데이터
  const radios = [
    {
      name: "라디오 1",
      audioSrc: radio2,
      url: "https://forms.gle/XCmgViivpnQnFiqu8",
    },
    {
      name: "라디오 2",
      audioSrc: radio3,
      url: "https://forms.gle/cWvjAwXYJanSZ7hi9",
    },
    {
      name: "라디오 3",
      audioSrc: radio1,
      url: "https://forms.gle/fcmTgJjezzfXLERaA",
    },
    {
      name: "라디오 4",
      audioSrc: radio4,
      url: "https://forms.gle/WkpkiMMVYvPmm17N6",
    },
  ];

  const handlePlayClick = (radio) => {
    setSelectedRadio(radio.name);
    setSelectedAudioSrc(radio.audioSrc); // 선택된 오디오 소스 설정
    setSelectedUrl(radio.url); // 선택된 URL 설정
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-6 bg-white rounded-lg shadow-md w-[800px] mx-auto">
        <h2 className="mb-4 text-xl font-semibold">
          광운대학교 정보융합학부 HCI와UX평가 팀프로젝트 4조
        </h2>
        <span className="text-gray-500">
          해당 라디오를 들은 후 첨부된 설문에 응답해주세요.
        </span>
        <ul className="mt-4 space-y-4">
          {radios.map((radio, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-6 bg-gray-100 rounded-md shadow h-[64px]"
            >
              <span className="text-lg">{radio.name}</span>
              <button
                className="text-[#5F9CF0] hover:text-[#3b7dc4] transition-colors"
                onClick={() => handlePlayClick(radio)}
              >
                <FaPlay />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <RadioPlaybackModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        radioName={selectedRadio}
        audioSrc={selectedAudioSrc}
        url={selectedUrl}
      />
    </div>
  );
};

export default RadioList;
