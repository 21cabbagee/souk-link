import React, { useState } from 'react';
import { 
  ShoppingBag, Sparkles, Send, ShieldCheck, ArrowRight, CheckCircle2, 
  AlertTriangle, RefreshCw, Layers, DollarSign, Database, Activity, 
  Video, Wallet, Share2, MessageCircle, ChevronRight, X, Play
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [activeTab, setActiveTab] = useState('catalog'); // 'catalog' | 'reel_studio' | 'cod_bot' | 'wallet'
  const [market, setMarket] = useState('EGYPT'); // 'EGYPT' | 'INDONESIA' | 'SAUDI' | 'MOROCCO'
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [language, setLanguage] = useState('ARABIC'); // 'ARABIC' | 'BAHASA'
  const [markupMargin, setMarkupMargin] = useState(12); // $12 reseller profit

  // COD Bot Simulator State
  const [botStep, setBotStep] = useState(1);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [walletBalance, setWalletBalance] = useState(148);

  // CAB Modal
  const [cabModalOpen, setCabModalOpen] = useState(false);
  const [cabForm, setCabForm] = useState({ partnerName: '', email: '', resellerCount: '500 - 2,500' });
  const [cabSubmitted, setCabSubmitted] = useState(false);

  const products = [
    {
      id: 'P1',
      title: 'Embroidered Linen Abaya & Scarf',
      titleAr: 'عباية كتان مطرزة فاخرة مع طرحة',
      titleId: 'Gamis Linen Bordir Premium & Pashmina',
      factoryCost: 14,
      suggestedRetail: 28,
      supplier: 'Al-Mansoura Textile Mills (Cairo)',
      image: '👗',
      category: 'Fashion & Modest Wear'
    },
    {
      id: 'P2',
      title: 'Bandung Hand-Tooled Leather Bag',
      titleAr: 'حقيبة يد جلدية أصلية صناعة يدوية',
      titleId: 'Tas Kulit Asli Kerajinan Tangan Bandung',
      factoryCost: 11,
      suggestedRetail: 25,
      supplier: 'Cibaduyut Leather Guild (Bandung)',
      image: '👜',
      category: 'Accessories & Leather'
    },
    {
      id: 'P3',
      title: 'Pure Organic Argan Oil Facial Serum',
      titleAr: 'سيروم زيت الأركان المغربي النقي 100%',
      titleId: 'Serum Wajah Minyak Argan Alami Maroko',
      factoryCost: 6,
      suggestedRetail: 18,
      supplier: 'Agadir Organic Cooperative (Morocco)',
      image: '✨',
      category: 'Beauty & Skincare'
    }
  ];

  const currentProduct = products[selectedProduct] || products[0];
  const retailPrice = currentProduct.factoryCost + markupMargin;

  const confirmCodOrder = () => {
    setBotStep(2);
    setTimeout(() => {
      setBotStep(3);
      setOrderConfirmed(true);
      setWalletBalance(prev => prev + markupMargin);
      try {
        confetti({ particleCount: 75, spread: 60, origin: { y: 0.8 } });
      } catch (e) {}
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-fuchsia-500 selection:text-black">
      {/* Top Notification */}
      <div className="border-b border-fuchsia-500/20 bg-fuchsia-950/40 px-4 py-2 text-center text-xs font-medium text-fuchsia-300">
        🛍️ <span className="font-semibold text-fuchsia-200">SoukLink V1 Engine:</span> Software-first social commerce for micro-resellers across MENA & Southeast Asia. 
        <button onClick={() => setCabModalOpen(true)} className="ml-2 underline hover:text-white">Join 10-Partner Pilot (70% Take-Rate Off)</button>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-pink-500 flex items-center justify-center font-black text-black text-lg shadow-lg shadow-fuchsia-500/20">
              SL
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                SoukLink
                <span className="text-[10px] uppercase tracking-wider bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20 px-2 py-0.5 rounded-full font-semibold">Reseller Hub</span>
              </span>
              <p className="text-[11px] text-slate-400">Zero-Inventory Vernacular Commerce</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
            <button onClick={() => setActiveTab('catalog')} className={`hover:text-fuchsia-400 transition ${activeTab === 'catalog' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400 pb-1' : ''}`}>Zero-Inventory Catalog</button>
            <button onClick={() => setActiveTab('reel_studio')} className={`hover:text-fuchsia-400 transition ${activeTab === 'reel_studio' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400 pb-1' : ''}`}>Vernacular Reel Studio</button>
            <button onClick={() => setActiveTab('cod_bot')} className={`hover:text-fuchsia-400 transition ${activeTab === 'cod_bot' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400 pb-1' : ''}`}>Anti-RTO COD Bot</button>
            <button onClick={() => setActiveTab('wallet')} className={`hover:text-fuchsia-400 transition ${activeTab === 'wallet' ? 'text-fuchsia-400 border-b-2 border-fuchsia-400 pb-1' : ''}`}>Reseller Margin Wallet</button>
          </div>

          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCabModalOpen(true)}
              className="px-4 py-2 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-400 text-slate-950 font-semibold text-xs tracking-wide transition shadow-lg shadow-fuchsia-500/25 flex items-center gap-1.5"
            >
              Wholesaler / Reseller Pilot
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
            Zero Warehouses • Arabic & Bahasa AI Video Reels • Pre-Dispatch COD Verification
          </div>

          {/* EXACT H1 TAG */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Capital-Light Vernacular Social Commerce: Empowering Local Resellers in MENA & SE Asia
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Launch a social boutique in 2 minutes without inventory risk. Share localized Arabic and Bahasa product reels on WhatsApp and TikTok, let suppliers drop-ship, and stop COD fraud.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button 
              onClick={() => setActiveTab('reel_studio')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 text-slate-950 font-bold text-sm hover:from-fuchsia-400 hover:to-pink-400 transition shadow-xl shadow-fuchsia-500/20 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Generate Arabic/Bahasa Video Reel
            </button>
            <button 
              onClick={() => setActiveTab('cod_bot')}
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 font-semibold text-sm hover:bg-slate-800 transition flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-fuchsia-400" />
              Test WhatsApp COD Anti-Fraud Bot
            </button>
          </div>

          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-left max-w-3xl mx-auto">
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
              <span className="text-slate-400 block">Inventory Risk</span>
              <span className="text-lg font-bold text-fuchsia-400">Zero Stock</span>
              <span className="text-[10px] text-slate-500 block">Direct Factory Drop-Ship</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
              <span className="text-slate-400 block">COD Return Rate (RTO)</span>
              <span className="text-lg font-bold text-white">&lt; 9.2% RTO</span>
              <span className="text-[10px] text-slate-500 block">vs. 35% Industry Average</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
              <span className="text-slate-400 block">Languages Supported</span>
              <span className="text-lg font-bold text-pink-400">العربية & Bahasa</span>
              <span className="text-[10px] text-slate-500 block">Localized Vernacular Media</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
              <span className="text-slate-400 block">Reseller Payout</span>
              <span className="text-lg font-bold text-fuchsia-300">Instant Wallet</span>
              <span className="text-[10px] text-slate-500 block">Credited on 3PL Clearance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Workspaces */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 mb-8 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('catalog')}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition whitespace-nowrap flex items-center gap-2 ${activeTab === 'catalog' ? 'border-fuchsia-500 text-fuchsia-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <ShoppingBag className="w-4 h-4" />
            Zero-Inventory Catalog
          </button>
          <button 
            onClick={() => setActiveTab('reel_studio')}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition whitespace-nowrap flex items-center gap-2 ${activeTab === 'reel_studio' ? 'border-fuchsia-500 text-fuchsia-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <Video className="w-4 h-4" />
            Vernacular Marketing Reel Studio
          </button>
          <button 
            onClick={() => setActiveTab('cod_bot')}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition whitespace-nowrap flex items-center gap-2 ${activeTab === 'cod_bot' ? 'border-fuchsia-500 text-fuchsia-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <ShieldCheck className="w-4 h-4" />
            Anti-RTO COD Verification Bot
          </button>
          <button 
            onClick={() => setActiveTab('wallet')}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition whitespace-nowrap flex items-center gap-2 ${activeTab === 'wallet' ? 'border-fuchsia-500 text-fuchsia-400' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <Wallet className="w-4 h-4" />
            Reseller Margin Wallet
          </button>
        </div>

        {/* Tab 1: Catalog */}
        {activeTab === 'catalog' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-fuchsia-400" />
                  Verified Wholesaler Network (Zero Inventory Holding)
                </h2>
                <span className="text-xs text-slate-400">3PL Integrated: Bosta, J&T, Aramex</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {products.map((p, idx) => (
                  <div 
                    key={p.id}
                    onClick={() => setSelectedProduct(idx)}
                    className={`p-5 rounded-2xl border cursor-pointer transition ${selectedProduct === idx ? 'bg-fuchsia-950/40 border-fuchsia-500/60 shadow-xl' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-slate-950 flex items-center justify-center text-3xl border border-slate-800">
                          {p.image}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-fuchsia-400">{p.category}</span>
                          <h3 className="font-bold text-white text-base">{p.title}</h3>
                          <p className="text-xs text-slate-400">{p.supplier}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">Factory Cost</span>
                        <span className="text-lg font-black text-white font-mono">${p.factoryCost}.00</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reseller Pricing Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card rounded-2xl p-6 border border-slate-800/80 shadow-2xl space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-fuchsia-400" />
                  Reseller Margin Calculator
                </h3>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Your Markup Profit (Kept by Reseller)</span>
                    <span className="font-mono text-fuchsia-400 font-bold">+${markupMargin}.00</span>
                  </div>
                  <input 
                    type="range" 
                    min="4" 
                    max="25" 
                    value={markupMargin}
                    onChange={(e) => setMarkupMargin(Number(e.target.value))}
                    className="w-full accent-fuchsia-500 bg-slate-800"
                  />
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                  <div className="flex justify-between text-slate-400">
                    <span>Wholesale Base Cost:</span>
                    <span className="font-mono font-medium">${currentProduct.factoryCost}.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Customer Retail Selling Price:</span>
                    <span className="font-mono font-bold text-white">${retailPrice}.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400 border-t border-slate-800 pt-2">
                    <span className="font-bold text-white">Your Net Profit per Sale:</span>
                    <span className="font-mono font-bold text-fuchsia-400 text-base">${markupMargin}.00</span>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveTab('reel_studio')}
                  className="w-full py-3 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-400 text-slate-950 font-bold text-sm tracking-wide transition shadow-lg shadow-fuchsia-500/25 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Generate Vernacular Reel & Share
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Reel Studio */}
        {activeTab === 'reel_studio' && (
          <div className="glass-card rounded-2xl p-8 border border-slate-800/80 max-w-4xl mx-auto shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Localized Vernacular Marketing Reel Studio</h2>
                <p className="text-xs text-slate-400">1-click automated TikTok & WhatsApp video reel captions in Arabic and Bahasa.</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setLanguage('ARABIC')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${language === 'ARABIC' ? 'bg-fuchsia-500 text-black' : 'bg-slate-900 text-slate-400'}`}
                >
                  العربية (Arabic)
                </button>
                <button 
                  onClick={() => setLanguage('BAHASA')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${language === 'BAHASA' ? 'bg-fuchsia-500 text-black' : 'bg-slate-900 text-slate-400'}`}
                >
                  Bahasa Indonesia
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Phone Reel Preview */}
              <div className="p-4 rounded-3xl bg-slate-950 border border-slate-800 max-w-xs mx-auto shadow-2xl space-y-4">
                <div className="aspect-[9/14] rounded-2xl bg-gradient-to-br from-fuchsia-950/80 via-slate-900 to-slate-950 p-6 flex flex-col justify-between border border-fuchsia-500/30 relative overflow-hidden">
                  <div className="flex justify-between items-center text-xs">
                    <span className="px-2 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 font-semibold text-[10px]">REEL GENERATOR</span>
                    <span className="text-lg">🔥</span>
                  </div>

                  <div className="text-center space-y-2 py-4">
                    <div className="text-6xl animate-bounce">{currentProduct.image}</div>
                    <div className="text-xs font-bold text-white px-2 leading-tight">
                      {language === 'ARABIC' ? currentProduct.titleAr : currentProduct.titleId}
                    </div>
                    <div className="text-2xl font-black text-fuchsia-400 font-mono">${retailPrice}.00</div>
                    <span className="text-[10px] text-slate-400 block">الدفع عند الاستلام • COD Available</span>
                  </div>

                  <div className="space-y-1.5 text-center">
                    <span className="text-[10px] font-semibold text-fuchsia-300 block">
                      {language === 'ARABIC' ? 'اطلب الآن عبر الواتساب مع التوصيل المجاني!' : 'Pesan sekarang via WhatsApp, bayar di tempat (COD)!'}
                    </span>
                    <div className="py-2 rounded-xl bg-fuchsia-500 text-black font-bold text-xs flex items-center justify-center gap-1.5">
                      <MessageCircle className="w-4 h-4" />
                      Order on WhatsApp
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Options */}
              <div className="space-y-4">
                <h3 className="font-bold text-white text-base">Direct Social Distribution Channels</h3>
                <p className="text-xs text-slate-400">Export high-resolution short-form video reels or product card links directly to your social customer lists.</p>

                <div className="space-y-3">
                  <button 
                    onClick={() => alert(`Shared to WhatsApp: "${language === 'ARABIC' ? currentProduct.titleAr : currentProduct.titleId} at $${retailPrice}.00 with COD Guarantee!"`)}
                    className="w-full p-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30 text-xs font-semibold flex items-center justify-between transition"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      Share to WhatsApp Status & Groups
                    </span>
                    <Share2 className="w-3.5 h-3.5" />
                  </button>

                  <button 
                    onClick={() => alert(`TikTok Shop product card exported: Reseller ID #SL-88190 mapped.`)}
                    className="w-full p-3 rounded-xl bg-fuchsia-600/20 border border-fuchsia-500/40 text-fuchsia-300 hover:bg-fuchsia-600/30 text-xs font-semibold flex items-center justify-between transition"
                  >
                    <span className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-fuchsia-400" />
                      Export to TikTok Shop & Instagram Reels
                    </span>
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
                  ⚡ <strong>Automated Order Routing:</strong> When a customer clicks your WhatsApp link, orders are automatically ingested into SoukLink without you needing to talk to manufacturers.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: COD Anti-RTO Bot */}
        {activeTab === 'cod_bot' && (
          <div className="glass-card rounded-2xl p-8 border border-slate-800/80 max-w-3xl mx-auto shadow-2xl space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-white mb-1">Automated Pre-Dispatch COD Verification Bot</h2>
              <p className="text-xs text-slate-400">In Egypt and Indonesia, 35% of COD parcels are rejected at the door. SoukLink's automated WhatsApp bot requires 1-click address & intent confirmation before courier dispatch, slashing Return-to-Origin (RTO) below 9.2%.</p>
            </div>

            {/* Chat Simulator */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-md mx-auto space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center font-bold text-black text-xs">
                  SL
                </div>
                <div>
                  <span className="font-bold text-white text-xs block">SoukLink Delivery Verification</span>
                  <span className="text-[10px] text-fuchsia-400">Automated WhatsApp Agent</span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200">
                  <p>Marhaban Salma! 👋 You ordered the <strong>{currentProduct.title}</strong> for <strong>${retailPrice}.00</strong> Cash on Delivery.</p>
                  <p className="text-[11px] text-slate-400 mt-1">Delivery Address: Villa 14, New Cairo, Egypt. Courier: Bosta Express.</p>
                  <p className="text-fuchsia-300 font-semibold mt-2">Please click below to confirm your availability to receive the package.</p>
                </div>

                {botStep === 1 && (
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={confirmCodOrder}
                      className="py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition"
                    >
                      ✅ Yes, Confirm Order
                    </button>
                    <button 
                      onClick={() => alert('Order cancelled prior to dispatch. Zero shipping loss incurred!')}
                      className="py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition"
                    >
                      ❌ Cancel Order
                    </button>
                  </div>
                )}

                {botStep >= 2 && (
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-center space-y-1">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                    <span className="font-bold block">Delivery Confirmed!</span>
                    <p className="text-[11px]">Bosta Express courier dispatched. Tracking code #BST-991823. Reseller margin locked.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Reseller Wallet */}
        {activeTab === 'wallet' && (
          <div className="glass-card rounded-2xl p-8 border border-slate-800/80 max-w-4xl mx-auto shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Reseller Margin Wallet</h2>
                <p className="text-xs text-slate-400">Commissions credited automatically upon verified courier delivery and COD cash reconciliation.</p>
              </div>
              <button 
                onClick={() => alert(`Withdrawal of $${walletBalance}.00 queued to your Vodafone Cash wallet (+20 10 9988 7766). Funds arrive in 15 minutes.`)}
                className="px-4 py-2 bg-fuchsia-500 hover:bg-fuchsia-400 text-slate-950 font-bold text-xs rounded-lg transition"
              >
                Withdraw to Mobile Wallet
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400">Available Balance</span>
                <div className="text-3xl font-black text-fuchsia-400 font-mono">${walletBalance}.00</div>
                <span className="text-[10px] text-slate-500">Ready for instant payout</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400">Monthly Completed Orders</span>
                <div className="text-3xl font-black text-white font-mono">24 Deliveries</div>
                <span className="text-[10px] text-emerald-400">0% RTO Default</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400">Platform Take-Rate</span>
                <div className="text-3xl font-black text-slate-300 font-mono">12.0%</div>
                <span className="text-[10px] text-slate-500">Pure software commission</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* CAB Modal */}
      {cabModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-card rounded-2xl max-w-lg w-full p-6 border border-fuchsia-500/30 shadow-2xl relative">
            <button 
              onClick={() => setCabModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {cabSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-fuchsia-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Application Received</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Our Wholesale Merchant Partner team will reach out within 12 hours to integrate your catalog into our zero-inventory drop-ship engine.
                </p>
                <button 
                  onClick={() => { setCabModalOpen(false); setCabSubmitted(false); }}
                  className="px-6 py-2 rounded-lg bg-fuchsia-500 text-slate-950 font-bold text-xs"
                >
                  Return to Dashboard
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setCabSubmitted(true); }} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-fuchsia-400">Design Partner Cohort</span>
                  <h3 className="text-xl font-bold text-white">Join the SoukLink 10-Partner Pilot</h3>
                  <p className="text-xs text-slate-400">
                    We are launching a pilot cohort of 10 commercial partners (wholesale manufacturers, social reseller agencies, and influencer networks) in Egypt, Morocco, and Indonesia. Dedicated integration and locked preferential partner pricing.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Company / Manufacturer Legal Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Cairo Textiles Co. / Bandung Leather Hub"
                      value={cabForm.partnerName}
                      onChange={(e) => setCabForm({ ...cabForm, partnerName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 focus:outline-none focus:border-fuchsia-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Commercial Lead Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="sales@manufacturer.com"
                      value={cabForm.email}
                      onChange={(e) => setCabForm({ ...cabForm, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 focus:outline-none focus:border-fuchsia-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Active Reseller Reach or Catalog SKUs</label>
                    <select 
                      value={cabForm.resellerCount}
                      onChange={(e) => setCabForm({ ...cabForm, resellerCount: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 focus:outline-none focus:border-fuchsia-500"
                    >
                      <option value="200 - 1,000">200 - 1,000 Micro-Resellers</option>
                      <option value="1,000 - 5,000">1,000 - 5,000 Micro-Resellers</option>
                      <option value="5,000+">5,000+ Micro-Resellers / Wholesaler</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-fuchsia-950/40 border border-fuchsia-500/30 text-[11px] text-fuchsia-300">
                  🎁 <strong>Pilot Privileges:</strong> Locked 70% preferential take-rate reduction (3.6% vs 12%), free vernacular AI reel rendering, and dedicated Bosta / J&T API onboarding.
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-400 text-slate-950 font-bold text-sm tracking-wide transition shadow-lg shadow-fuchsia-500/25"
                >
                  Apply for Pilot Cohort (3 Slots Remaining)
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 SoukLink Social Commerce Ltd. Capital-light dropshipping infrastructure.</p>
          <div className="flex gap-4">
            <span className="text-slate-400">Canonical: /solutions/vernacular-social-commerce-platform</span>
            <span className="text-fuchsia-500 font-semibold">Bosta • J&T • Aramex • WhatsApp Cloud Ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
