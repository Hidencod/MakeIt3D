// src/components/CodePreview.tsx
import React, { useState } from 'react';
import styles from './CodePreview.module.css';

const codeExamples = {
    basic: `// Create a simple 3D scene in Construct 3
System → On start of layout
├─ MakeIt3D → Create Scene (layer, room lighting, postprocessing, axis helper, grid helper, orbit controls)
├─ MakeIt3D → Add Cube (ObjectId, position, rotation, color, scale, height segmets, width segments, depth segments)
├─ MakeIt3D → Set Object Color ("cube_1", MakeIt3D.RGB(255, 0, 0))
└─ MakeIt3D → Set Camera Position (0, 0, 5)`,

    advanced: `// Advanced 3D scene with lighting and animation
System → On start of layout
├─ MakeIt3D → Create Scene (layer, room lighting, postprocessing, axis helper, grid helper, orbit controls)
├─ MakeIt3D → Load Model (ObjectId,"characters/hero.glb", position, rotation, scale, intially visble)
├─ MakeIt3D → Add Directional Light (ObjectId, position, target object, target position, color, intensity, cast shadow)
├─ MakeIt3D → Set Ambient Light (ObjectId, color, intensity)
├─ MakeIt3D → Enable Orbit Controls (Set Orbit Control Propersties)
└─ MakeIt3D → Play Animation ("hero", "idle")

Every 0.1 seconds
└─ MakeIt3D → Translate Object ("hero", 0, 0, 1)`,

    materials: `// Working with materials and textures
System → On start of layout
├─ MakeIt3D →  Add Cube ("mycube", position, rotation, color, scale, height segmets, width segments, depth segments)
├─ MakeIt3D → Set Texture ("mycube", "textures/metal.jpg")

Mouse → On Left Click
└─ MakeIt3D → Set Object Color ("mycube", MakeIt3D.RGB(0, 255, 0))`
};

const tabs = [
    { key: 'basic', label: 'Basic Scene', icon: '🎯' },
    { key: 'advanced', label: 'Advanced', icon: '🚀' },
    { key: 'materials', label: 'Materials', icon: '🎨' }
];

export default function CodePreview() {
    const [activeTab, setActiveTab] = useState('basic');

    return (
        <section className={styles.codePreview}>
            <div className="container">
                <div className={styles.previewHeader}>
                    <h2 className={styles.previewTitle}>
                        See MakeIt3D in action
                    </h2>
                    <p className={styles.previewSubtitle}>
                        Simple, intuitive actions that integrate seamlessly with Construct 3's event system
                    </p>
                </div>

                <div className={styles.codeContainer}>
                    <div className={styles.tabBar}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                className={`${styles.tab} ${activeTab === tab.key ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                <span className={styles.tabIcon}>{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className={styles.codeBlock}>
                        <div className={styles.codeHeader}>
                            <div className={styles.windowDots}>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                            </div>
                            <span className={styles.fileName}>Event Sheet - {tabs.find(t => t.key === activeTab)?.label}</span>
                        </div>
                        <pre className={styles.codeContent}>
                            <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
                        </pre>
                    </div>

                    <div className={styles.featureList}>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>✨</span>
                            <div>
                                <h4>Visual Event System</h4>
                                <p>Use familiar Construct 3 events to control 3D objects</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>⚡</span>
                            <div>
                                <h4>Inbuilt Editor</h4>
                                <p>Use inbuilt three.js editor to create levels</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>🎮</span>
                            <div>
                                <h4>Game-ready</h4>
                                <p>Built for interactive experiences and games</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}