import React, { useState } from 'react';
import { TrendingUp, ShieldCheck, Zap, DollarSign, CheckCircle2, ShoppingBag, Truck } from 'lucide-react';

/**
 * OutcomeChart for SoukLink (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares 38% Cash-on-Delivery (COD) Return-to-Origin (RTO) shipping losses & manual call centers ($6 human agency waste) with Autonomous WhatsApp Verification ($1 software).
 */
export default function OutcomeChart({
  serviceName = "Social Commerce & Pre-Dispatch COD Anti-Fraud",
  defaultMonthlyOrders = 2500,
  onCtaClick
}) {
  const [orders, setOrders] = useState(defaultMonthlyOrders);
  const avgOrderValue = 35; // $35 average basket size
  const returnShippingCost = 6.5; // $6.50 return penalty per refused package

  // Legacy: 38% RTO rate + manual call center agents ($1.20/call verification)
  const legacyFailedOrders = Math.round(orders * 0.38);
  const legacyShippingLoss = legacyFailedOrders * returnShippingCost;
  const legacyCallCenterExpense = orders * 1.20;
  const legacyTotalBurden = Math.round(legacyShippingLoss + legacyCallCenterExpense);

  // SoukLink: Autonomous WhatsApp bot brings RTO down to 6.2% with $0.15/verification
  const autoFailedOrders = Math.round(orders * 0.062);
  const autoShippingLoss = autoFailedOrders * returnShippingCost;
  const autoBotExpense = orders * 0.15;
  const autoTotalBurden = Math.round(autoShippingLoss + autoBotExpense);

  const netMerchantSavings = legacyTotalBurden - autoTotalBurden;
  const savingsPercent = Math.round(((legacyTotalBurden - autoTotalBurden) / legacyTotalBurden) * 100);

  const maxCost = Math.max(legacyTotalBurden, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((autoTotalBurden / maxCost) * 100), 12);

  return (
    <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-slate-950 border-fuchsia-500/30 text-fuchsia-400">
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs Call Center Agencies ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            E-Commerce Margin Economics: <span className="text-fuchsia-400">{savingsPercent}% COD Waste Elimination</span>
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            In emerging markets, 38% of COD parcels get rejected at the doorstep. Legacy merchants hire manual call centers to chase buyers. We replace the human agency with automated conversational WhatsApp verification before warehouse dispatch.
          </p>
        </div>

        <div className="text-right bg-slate-950/60 border border-slate-800 rounded-xl p-3 px-4 min-w-[190px]">
          <span className="text-[11px] text-slate-400 block font-medium">Monthly Merchant Profit Retained</span>
          <span className="text-2xl md:text-3xl font-black text-fuchsia-400">
            ${netMerchantSavings.toLocaleString()}
          </span>
          <span className="text-[10px] text-pink-400/80 flex items-center justify-end gap-1 font-semibold">
            <TrendingUp className="w-3 h-3" /> 6.2% Verified RTO
          </span>
        </div>
      </div>

      {/* Interactive Volume Slider */}
      <div className="py-6 border-b border-slate-800">
        <div className="flex items-center justify-between text-sm mb-3">
          <label className="text-slate-300 font-semibold flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-fuchsia-400" />
            Monthly Dispatched Order Volume:
          </label>
          <span className="text-base font-bold text-white bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">
            {orders.toLocaleString()} Parcels (${(orders * avgOrderValue).toLocaleString()} GMV)
          </span>
        </div>
        <input 
          type="range" 
          min={500} 
          max={20000} 
          step={500}
          value={orders}
          onChange={(e) => setOrders(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-fuchsia-400"
        />
        <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
          <span>500 Parcels (Boutique Wholesaler)</span>
          <span>5,000 Parcels (Regional Distributor)</span>
          <span>20,000+ Parcels (Enterprise Brand)</span>
        </div>
      </div>

      {/* Bklit UI Visual Comparison Chart & Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
        {/* SVG Visual Bars */}
        <div className="md:col-span-5 bg-slate-950/70 rounded-xl p-5 border border-slate-800">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
            <span>Monthly Return Shipping & Labor Loss</span>
            <span className="text-[10px] text-slate-500">Live Simulation</span>
          </div>

          <div className="space-y-4">
            {/* Legacy Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Manual Call Center + 38% Doorstep Rejection ($6)
                </span>
                <span className="font-mono font-bold text-rose-300">${legacyTotalBurden.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-900 rounded-lg overflow-hidden border border-rose-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-rose-600 to-rose-400 transition-all duration-300 rounded-lg"
                  style={{ width: `${legacyBarHeight}%` }}
                />
              </div>
            </div>

            {/* Autonomous Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-fuchsia-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-fuchsia-400"></span>
                  SoukLink AI Pre-Dispatch WhatsApp Shield ($1)
                </span>
                <span className="font-mono font-bold text-fuchsia-300">${autoTotalBurden.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-900 rounded-lg overflow-hidden border border-fuchsia-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-fuchsia-500 to-pink-500 transition-all duration-300 rounded-lg shadow-lg shadow-fuchsia-500/30"
                  style={{ width: `${autoBarHeight}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-slate-400">Annual Net Profit Reclaimed:</span>
            <span className="text-sm font-bold text-fuchsia-400 font-mono">+${(netMerchantSavings * 12).toLocaleString()}</span>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center shrink-0 mt-0.5">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Pre-Dispatch Location Pin Verification</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Buyers confirm exact WhatsApp GPS pins before courier handoff, reducing incorrect address delivery failures by 92%.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center shrink-0 mt-0.5">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">AI Vernacular Reel Studio</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Micro-resellers convert static product images into viral Arabic and Bahasa video reels in 30 seconds with zero production cost.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Zero-Inventory Reseller Margin Wallets</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Suppliers pack and ship directly. Resellers collect instant cash-out commissions immediately upon delivery confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
