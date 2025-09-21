import React from 'react'
import '../Styles/HomePage.css'
import { FaUsers, FaMobileAlt, FaCheckCircle } from 'react-icons/fa'
import { FaCamera, FaComments, FaRoute, FaShieldAlt, FaEye } from 'react-icons/fa'

const HomePage = () => {
    return (

        <div className="hero">
            {/* ===== NAVBAR ===== */}
            <header className="navbar">
                <div className="logo">
                    <div className="logo-icon">
                        <FaEye />
                    </div>
                    <span className="brand">EyeAssist</span>
                </div>
            </header>

            {/* ===== HERO CONTENT ===== */}
            <div className="hero-content">
                <span className="tag">Advanced AI Technology</span>
                <h1>
                    The most advanced platform <br />
                    to <span className="highlight">assist blind people</span>
                </h1>
                <p>
                    Connect families with conversational AI technology. <br />
                    Web supervision for families and an intelligent mobile assistant
                    for independent navigation.
                </p>
            </div>

            <div className="trusted">
                <p>Cutting-edge technology powered by</p>
                <div className="logos">
                    <span>Advanced AI</span>
                    <span>Computer Vision</span>
                    <span>GPS Precision</span>
                    <span>Voice Recognition</span>
                </div>
            </div>

            {/* ===== FEATURES SECTION ===== */}
            <section className="platforms">
                <h2>Two Platforms, One Solution</h2>
                <p>
                    Integrated technology that connects families with their loved ones
                    through advanced AI and real-time supervision.
                </p>

                <div className="cards">
                    {/* Card 1 */}
                    <div className="card">
                        <div className="card-header">
                            <div className="icon-container">
                                <FaUsers className="card-icon" />
                            </div>
                            <h3>Web Platform for Families</h3>
                            <p>Complete control panel to supervise and manage your loved one's care</p>
                        </div>
                        {/* Video in Card 1 */}
                        <div className="card-image">
                            <video
                                src="/Videos/webAdmin.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="card-video"
                            />
                        </div>
                        <ul className="features">
                            <li><FaCheckCircle className="check" /> Real-time location</li>
                            <li><FaCheckCircle className="check" /> Route and destination management</li>
                            <li><FaCheckCircle className="check" /> Multi-family member management</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="card">
                        <div className="card-header">
                            <div className="icon-container">
                                <FaMobileAlt className="card-icon" />
                            </div>
                            <h3>AI Mobile App</h3>
                            <p>Intelligent assistant that describes the environment and guides navigation</p>
                        </div>
                        {/* Video in Card 2 */}
                        <div className="card-image">
                            <video
                                src="/Videos/AppMovil.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="card-video"
                            />
                        </div>
                        <ul className="features">
                            <li><FaCheckCircle className="check" /> Conversational AI describing the environment</li>
                            <li><FaCheckCircle className="check" /> Voice navigation to saved destinations</li>
                            <li><FaCheckCircle className="check" /> Chest harness for hands-free use</li>
                            <li><FaCheckCircle className="check" /> Object and obstacle recognition</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== HOW IT WORKS SECTION ===== */}
            <section className="how-it-works">
                <h2>How It Works</h2>
                <p className="subtitle">
                    Three simple steps to start using the most advanced technology
                    in assistance for blind people
                </p>

                <div className="steps">
                    {/* Step 1 */}
                    <div className="step">
                        <div className="circle">1</div>
                        <h3>Family Registration</h3>
                        <p>
                            Families register on the web platform and set up profiles,
                            safe zones, and frequent destinations.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="step">
                        <div className="circle">2</div>
                        <h3>Device Setup</h3>
                        <p>
                            Install the AI mobile app on the phone and configure the chest harness
                            for hands-free use.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="step">
                        <div className="circle">3</div>
                        <h3>Independent Navigation</h3>
                        <p>
                            The blind person can navigate independently while
                            families supervise in real-time.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== ADVANCED FEATURES ===== */}
            <section className="features-advanced">
                <h2>Advanced Features</h2>
                <p className="subtitle">
                    Cutting-edge technology specifically designed to improve
                    independence and safety
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <FaCamera />
                        </div>
                        <h3>AI Vision</h3>
                        <p>Advanced recognition of objects, people, and obstacles in real time</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <FaComments />
                        </div>
                        <h3>Natural Conversation</h3>
                        <p>Natural voice interaction to ask questions about the environment</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <FaRoute />
                        </div>
                        <h3>Smart Navigation</h3>
                        <p>Step-by-step directions to destinations preconfigured by the family</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <FaShieldAlt />
                        </div>
                        <h3>24/7 Supervision</h3>
                        <p>Continuous monitoring with instant alerts for families</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <FaUsers />
                        </div>
                        <h3>Multiple Caregivers</h3>
                        <p>Allows multiple family members to supervise and receive notifications</p>
                    </div>
                </div>
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <section className="cta">
                <h2>Start Transforming Lives Today</h2>
                <p>
                    Join thousands of families already trusting EyeAssist to provide
                    independence and safety to their loved ones.
                </p>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="footer">
                <div className="footer-bottom">
                    <p>© 2024 EyeAssist. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default HomePage
