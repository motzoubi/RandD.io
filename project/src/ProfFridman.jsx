import React from 'react';
import './ProfFridman.css'; // import CSS for styling
import fird from './fridman.png'; // Replace with the correct path to the image

const ProfFridman = () => {
  return (
    <div className="prof-fridman-container">
      {/* Header Section */}
      <div className="header">
        <img
          src={fird} // Image of Prof. Moti Fridman
          alt="Prof. Moti Fridman"
          className="prof-image"
        />
        <div className="prof-header-info">
          <h1>Prof. Moti Fridman</h1>
          <p>Bar-Ilan University, Israel</p>
          <p>Experimental Photonics and Ultrafast Optics</p>
        </div>
      </div>

      {/* Research Summary */}
      <div className="research-summary">
        <h2>Research Group Overview</h2>
        <p>
          Prof. Moti Fridman’s research group at Bar-Ilan University in Israel stands at the forefront of experimental photonics and ultrafast optics, distinguished by three main pillars of expertise:
        </p>
        <ul>
          <li>Temporal Optics</li>
          <li>Fiber-Based Devices</li>
          <li>Coupled Photonic Systems</li>
        </ul>
      </div>

      {/* Pillar 1: Temporal Optics */}
      <div className="research-pillar">
        <h3>1. Temporal Optics and Ultrafast Measurement</h3>
        <ul>
          <li><strong>Time Lens Arrays & Temporal Imaging:</strong> Magnifying, compressing, and processing ultrafast signals in the time domain.</li>
          <li><strong>Temporal SU(1,1) Interferometry:</strong> Achieving phase sensitivities beyond the shot-noise limit for sub-picosecond scale phase changes.</li>
          <li><strong>Temporal Encryption & High-Speed Signal Processing:</strong> Encryption at data rates up to 1 Tb/s for ultrafast communications.</li>
          <li><strong>Rogue Waves & Nonlinear Dynamics:</strong> Investigations into extreme event formation and soliton interactions in fiber lasers.</li>
        </ul>
      </div>

      {/* Pillar 2: Fiber-Based Devices */}
      <div className="research-pillar">
        <h3>2. Fiber-Based Devices and Sensing</h3>
        <ul>
          <li><strong>Microknot Resonators & Complex Fiber Gratings:</strong> Specializing in microknot resonators and long-period gratings for various applications.</li>
          <li><strong>In-Liquid Durable Sensors:</strong> High-sensitivity platforms for chemical and biological detection in environmental sensing.</li>
          <li><strong>Polarization and Mode Control:</strong> Tailoring polarization states and exciting higher-order modes with fiber gratings and microknot geometries.</li>
          <li><strong>High-Power Fiber Laser Coherence:</strong> Scaling up fiber-laser outputs for industrial and defense applications.</li>
        </ul>
      </div>

      {/* Pillar 3: Coupled Photonic Systems */}
      <div className="research-pillar">
        <h3>3. Coupled Photonic & Complex Systems</h3>
        <ul>
          <li><strong>Synchronization of Laser Networks:</strong> Exploring how laser networks exhibit complex collective behaviors.</li>
          <li><strong>Random Matrix and Noise Studies:</strong> Analyzing multi-laser and fiber-laser systems using random matrix theory.</li>
        </ul>
      </div>

      {/* Infrastructure and Collaboration */}
      <div className="research-collaboration">
        <h3>Laboratory Infrastructure and Collaboration</h3>
        <p>
          The lab is equipped with cutting-edge tools for ultrafast measurement and laser sources, enabling both fundamental and applied research. Prof. Fridman’s group collaborates with theorists and industry experts to drive innovation in quantum optics, sensing, and telecommunications.
        </p>
      </div>
    </div>
  );
};

export default ProfFridman;
