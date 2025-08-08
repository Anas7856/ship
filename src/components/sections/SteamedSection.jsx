import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faUniversity, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import {faPaypal} from "@fortawesome/free-brands-svg-icons";
import ser5 from "../../assets/ser5.jpg";
import "./SteamedSection.css";

const paymentMethods = [
    { icon: faCreditCard, label: "" },
    { icon: faUniversity, label: "" },
    { icon: faPaypal, label: "" },
    { icon: faFileInvoiceDollar, label: "" },
];

const feeBadges = [
    { icon: faCreditCard, label: "Secure payment" },
    { icon: faUniversity, label: "Global coverage" },
    { icon: faPaypal, label: "Flexible" },
];

const SteamedSection = () => (
    <section className="fee-section" id="fee">
        <div className="container">
            <div className="section-title text-center">
                <p className="subtitle"></p>
                <h2>Trusted Path to Global Shipping</h2>
                <div className="decorative-line center"></div>
                <p className="section-description">
                    Secure your dedicated shipping lane with our transparent fee structure and flexible payment options
                </p>
            </div>

            <div className="fee-content">
                <div className="fee-image enlarged align-truck">
                    <img src={ser5} alt="Dedicated Lane Slot Fee Payment" />
                    <div className="fee-badges">
                        {feeBadges.map((badge, idx) => (
                            <div className="fee-badge" key={idx}>
                                <FontAwesomeIcon icon={badge.icon} />  

                                <span>{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="fee-text">
                    <div className="fee-header">
                        <div className="fee-icon">
                            <i className="fas fa-truck-moving"></i>
                        </div>
                        <h3>Dedicated Lane Slot Fee Payment</h3>
                    </div>

                    <div className="fee-content-text">
                        <p>
                            Our <strong>Dedicated Lane Slot</strong> service guarantees your shipments priority access to the most efficient routes across the globe. With guaranteed capacity and fixed rates, you can plan your logistics with confidence.
                        </p>
                        <p>
                            Secure your shipping lane with a transparent fee structure that includes customs clearance, route optimization, and real-time tracking. Our dedicated team ensures your cargo moves seamlessly from origin to destination.
                        </p>
                        <p>
                            Experience the <span className="highlight">premium advantage</span>of dedicated lanes with reduced transit times, enhanced reliability, and priority handling at all checkpoints.
                        </p>
                    </div>

                    <div className="payment-methods improved-alignment">
                        {paymentMethods.map((method, idx) => (
                            <div className="payment-method" key={idx}>
                                <div className="payment-icon">
                                    <FontAwesomeIcon icon={method.icon} />
                                </div>
                                <span>{method.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SteamedSection;
