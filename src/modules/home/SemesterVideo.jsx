import './SemesterVideo.scss';

export default function SemesterVideo() {
    return (
        <div className="semester-video">
            <iframe
                src="https://www.youtube.com/embed/OKYvgQz-tZg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
}