import team from '../data/profile'

function Alumni() {
    return (
        <div style={{
            width: '100vw',
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url("https://via.placeholder.com/1920x1080?text=Techy+Background")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '100px',
        }}>
            {/* Techy Cards Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                zIndex: 2,
                width: '90vw',
                maxWidth: '1200px',
                margin: '5vh auto',
            }}>
                {team.map((alumnus, idx) => (
                    <div key={idx} style={{
                        background: 'linear-gradient(135deg, #111 0%, #232526 100%)',
                        borderRadius: '24px',
                        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 #2196f3',
                        color: '#fff',
                        padding: '1.6rem 1.2rem 1.2rem 1.2rem',
                        minHeight: '340px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(0,0,0,0.55), 0 3px 12px 0 #2196f3';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 #2196f3';
                        }}
                    >

                        {/* Avatar */}
                        <div style={{
                            background: 'radial-gradient(circle, #232526 0%, #2196f3 80%)',
                            borderRadius: '50%',
                            padding: '5px',
                            marginBottom: '1.2rem',
                            boxShadow: '0 0 16px 4px #2196f388',
                            alignSelf: 'center',
                        }}>
                            <img
                                src={alumnus.profile_photo !== "NA" ? alumnus.profile_photo : "https://via.placeholder.com/72"}
                                alt={alumnus.name}
                                style={{
                                    width: '72px',
                                    height: '72px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '2.5px solid #18191C',
                                    boxShadow: '0 0 8px 1px #2196f3cc',
                                }}
                            />
                        </div>

                        {/* Name + Role */}
                        <h2 style={{
                            margin: 0,
                            fontWeight: 800,
                            fontSize: '1.2rem',
                            letterSpacing: '1px',
                            textShadow: '0 2px 8px #2196f344',
                        }}>{alumnus.name}</h2>
                        <p style={{
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            color: '#90caf9',
                            marginBottom: '0.8rem',
                        }}>{alumnus.role || "Alumni"}</p>

                        {/* Experience list */}
                        <div style={{ marginBottom: '1rem', width: '100%' }}>
                            <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem', color: '#2196f3' }}>Experience:</h3>
                            {alumnus.experience && alumnus.experience.map((exp, i) => (
                                <p key={i} style={{
                                    margin: '0.2rem 0',
                                    fontSize: '0.9rem',
                                    opacity: 0.9,
                                }}>
                                    <strong>{exp.role}</strong> @ {exp.company}
                                </p>
                            ))}
                        </div>

                        {/* LinkedIn */}
                        {alumnus.linkedin && alumnus.linkedin !== "NA" && (
                            <a
                                href={alumnus.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    marginTop: 'auto',
                                    alignSelf: 'center',
                                    padding: '8px 16px',
                                    background: '#2196f3',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    transition: '0.3s',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#42a5f5'}
                                onMouseLeave={(e) => e.currentTarget.style.background = '#2196f3'}
                            >
                                LinkedIn
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Alumni;
