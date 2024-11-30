import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './RadioPlayModal.css'; // 커스텀 CSS 임포트
import { FaTimes } from 'react-icons/fa';

const RadioPlaybackModal = ({ isOpen, onClose, radioName, audioSrc, url }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{radioName}</h3>
            <span className="text-gray-500">
              해당 라디오를 다 들은 후 설문에 응답해주세요.
            </span>
            <a
              href={url}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              설문 링크
            </a>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </button>
        </div>
        <AudioPlayer
          src={audioSrc}
          onPlay={() => console.log('재생 시작')}
          showJumpControls={true}
          customAdditionalControls={[]}
          customVolumeControls={['Volume']}
        />
      </div>
    </div>
  );
};

export default RadioPlaybackModal;
