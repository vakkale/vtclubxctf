import './Contact.scss';
import PageHeader from "../modules/PageHeader";
import officers from "../data/officers";

export default function Contact() {

    const image = "https://i.imgur.com/ftjzYaB.jpg";

    const OffcierCards = ({ officer }) => {
        return (
            <>
                <div className="officer-card">
                    <div className="card-top"
                        style={{
                            backgroundImage: `url(${officer.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            height: '400px',
                        }}
                    >
                        <div className="officer-info">
                            <h3 className='name'>{officer.name}</h3>
                            <p className='position'>{officer.position}</p>
                            <p className='email'>{officer.email}</p>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <p className='bio'>{officer.bio}</p>
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <PageHeader image={image} title={"Officers"} yPos={"35%"} subtitle="Contact Us" />
            <div className="bar-plus-content">
                <div className='topbar-container' id='topbar'></div>
                <div className="page-content">
                    <div className="cards-container">
                        {officers.map((officer, index) => {
                            return (
                                <OffcierCards key={index} officer={officer} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}