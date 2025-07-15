import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
    showRepoNote?: boolean;
}

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const modal = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1 },
    exit: { y: 30, opacity: 0, scale: 0.95 },
};

// Parses raw string into bullet points and paragraphs
const renderParsedContent = (raw: string) => {
    const lines = raw.split("\n").map(line => line.trim()).filter(Boolean);

    const result: React.ReactNode[] = [];
    let buffer: string[] = [];

    lines.forEach((line, idx) => {
        if (line.startsWith("-")) {
            buffer.push(line.slice(1).trim()); // remove the hyphen
        } else {
            if (buffer.length > 0) {
                result.push(
                    <ul className="list-disc list-inside space-y-1 text-white/80 mb-2" key={`ul-${idx}`}>
                        {buffer.map((item, i) => (
                            <li key={`li-${idx}-${i}`} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>
                );
                buffer = [];
            }
            result.push(
                <p className="mb-2 text-white/90" key={`p-${idx}`} dangerouslySetInnerHTML={{ __html: line }} />
            );
        }
    });

    // Flush remaining bullets
    if (buffer.length > 0) {
        result.push(
            <ul className="list-disc list-inside space-y-1 text-white/80 mb-2" key="ul-last">
                {buffer.map((item, i) => (
                    <li key={`li-last-${i}`} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
            </ul>
        );
    }

    return result;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, showRepoNote }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.div
                        className="relative bg-[#1f2937] text-white w-full max-w-lg rounded-xl shadow-lg p-6 overflow-y-auto max-h-[80vh]"
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/60 hover:text-white focus:outline-none"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-xl font-semibold mb-4">{title}</h2>

                        <div className="text-sm leading-relaxed space-y-3">
                            {renderParsedContent(content)}

                            {showRepoNote && (
                                <div className="mt-4 text-xs text-yellow-300 bg-yellow-900/30 p-3 rounded-md border border-yellow-500">
                                    <strong>Note:</strong> The GitHub repository for this project is private and will be shared upon request.
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
