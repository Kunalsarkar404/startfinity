import React from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const EligibilityForm = ({ formData, handleChange, handleSubmit, loading, errors, success, setFormData }) => {

    return (
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl p-6 text-white">
            {success && (
                <div className="mb-4 p-3 bg-green-500/20 backdrop-blur-sm border border-green-400/50 rounded-lg flex items-center">
                    <FaCheck className="text-green-300 mr-2" size={16} />
                    <div>
                        <p className="font-bold text-sm">Success!</p>
                        <p className="text-xs text-green-100">Report sent to your email</p>
                    </div>
                </div>
            )}

            <h3 className="font-bold mb-1 text-2xl">Check Your Eligibility</h3>
            <p className="text-blue-100 mb-5 text-sm">Get instant funding options in 30 seconds</p>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold mb-1.5">
                        Business Type <span className="text-red-300">*</span>
                    </label>
                    <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className={`w-full px-3 py-2.5 text-sm bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all text-white font-medium ${errors.businessType ? 'border-red-400' : ''}`}
                        style={{ color: 'rgba(255, 255, 255, 0.95)' }}
                    >
                        <option value="" className="text-gray-800">Select Type</option>
                        <option value="manufacturing" className="text-gray-800">Manufacturing</option>
                        <option value="trading" className="text-gray-800">Trading</option>
                        <option value="services" className="text-gray-800">Services</option>
                        <option value="retail" className="text-gray-800">Retail</option>
                    </select>
                    {errors.businessType && <p className="text-red-300 text-xs mt-1">⚠️ {errors.businessType}</p>}
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1.5">
                        Funding Required <span className="text-red-300">*</span>
                    </label>
                    <select
                        name="fundingRequired"
                        value={formData.fundingRequired}
                        onChange={handleChange}
                        className={`w-full px-3 py-2.5 text-sm bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all text-white font-medium ${errors.fundingRequired ? 'border-red-400' : ''}`}
                        style={{ color: 'rgba(255, 255, 255, 0.95)' }}
                    >
                        <option value="" className="text-gray-800">Select Range</option>
                        <option value="0-10L" className="text-gray-800">₹0 - ₹10L</option>
                        <option value="10L-50L" className="text-gray-800">₹10L - ₹50L</option>
                        <option value="50L-1Cr" className="text-gray-800">₹50L - ₹1Cr</option>
                        <option value="1Cr+" className="text-gray-800">₹1Cr+</option>
                    </select>
                    {errors.fundingRequired && <p className="text-red-300 text-xs mt-1">⚠️ {errors.fundingRequired}</p>}
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1.5">
                        Business Stage <span className="text-red-300">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        {['Idea Stage', 'Early Revenue', 'Scaling', 'Established'].map((stage) => (
                            <button
                                key={stage}
                                type="button"
                                onClick={() => setFormData({ ...formData, businessStage: stage })}
                                className={`px-3 py-2.5 text-xs font-semibold rounded-lg transition-all ${formData.businessStage === stage
                                    ? 'bg-white text-blue-700 shadow-lg'
                                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20'
                                    }`}
                            >
                                {stage}
                            </button>
                        ))}
                    </div>
                    {errors.businessStage && <p className="text-red-300 text-xs mt-1">⚠️ {errors.businessStage}</p>}
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-white text-blue-700 px-6 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <>
                            <span className="inline-block w-4 h-4 border-2 border-blue-700 border-t-transparent rounded-full animate-spin mr-2"></span>
                            Processing...
                        </>
                    ) : success ? (
                        <>
                            <FaCheck className="mr-2" /> Success!
                        </>
                    ) : (
                        <>
                            Check Eligibility <FaArrowRight className="ml-2" size={12} />
                        </>
                    )}
                </button>

                <div className="flex items-center justify-center gap-3 text-xs text-blue-100 pt-1">
                    {['100% Free', 'No Spam', 'Secure'].map((badge, i) => (
                        <div key={i} className="flex items-center">
                            <FaCheck className="text-green-400 mr-1" size={10} />
                            <span>{badge}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EligibilityForm;
