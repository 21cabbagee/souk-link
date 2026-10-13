# SoukLink — Capital-Light Vernacular Social Commerce Engine for MENA & SE Asia

[![License: MIT](https://img.shields.io/badge/License-MIT-fuchsia.svg)](https://opensource.org/licenses/MIT)
[![Deploy to GitHub Pages](https://github.com/21cabbagee/souk-link/actions/workflows/deploy.yml/badge.svg)](https://github.com/21cabbagee/souk-link/actions/workflows/deploy.yml)

> **Software-first social commerce infrastructure empowering micro-resellers across Tier 2/3 Arabic and Bahasa markets without warehousing or working-capital inventory risk.**

---

## 1. Executive Summary & Problem Thesis
- **System Name:** SoukLink
- **Market Sizing (TAM):** 2,500,000 active female social resellers in Egypt, Morocco, and Indonesia × $120 monthly merchandise profit split × 12% platform take rate = **$432 Million TAM**.
- **The Problem:** While Meesho scaled across India, social commerce in Arabic-speaking MENA (Egypt, Saudi, Morocco) and Tier 2/3 Indonesia remains fragmented. Asset-heavy B2B players like Wasoko and MaxAB burned millions warehousing physical inventory on 3% margins. Micro-entrepreneurs want to sell fashion and beauty on WhatsApp and TikTok, but lack supplier catalogs, localized marketing reels, and automated cash-on-delivery (COD) fraud prevention. 35% of COD shipments fail at the door (Return-to-Origin / RTO).
- **The Solution:** Software-first dropshipping engine linking local verified manufacturers directly with resellers. Resellers generate 1-click localized Arabic/Bahasa video reels, share them to WhatsApp, and let an automated pre-dispatch WhatsApp bot confirm buyer intent before courier dispatch—slashing RTO below 9.2%. Reseller margins are credited to mobile wallets automatically upon courier delivery.

---

## 2. Technical Architecture & Agent Build Stack
- **Frontend:** React 18, Vite, TailwindCSS (RTL Arabic support), Lucide Icons.
- **Engine Architecture:**
  1. **Zero-Inventory Supplier Catalog:** REST API catalog integrating local manufacturers with zero platform inventory carrying cost.
  2. **Vernacular Reel Studio:** Automated localized marketing reel and WhatsApp product card generator in Arabic (العربية) and Bahasa Indonesia.
  3. **Automated Anti-RTO COD Bot:** WhatsApp Cloud API bot verifying buyer intent and street address prior to 3PL parcel pickup.
  4. **Reseller Margin Wallet:** Real-time ledger distributing automated commissions upon delivery confirmation from 3PLs (Bosta, J&T, Aramex).

---

## 3. SEO & Canonical Setup
- **H1:** `Capital-Light Vernacular Social Commerce: Empowering Local Resellers in MENA & SE Asia`
- **Canonical Slug:** `/solutions/vernacular-social-commerce-platform`
- **Keywords:** `vernacular social commerce software mena`, `reseller dropshipping catalog app arabic`, `pinduoduo meesho alternative indonesia egypt`, `cod fraud prevention social commerce bot`

---

## 4. Local Development
```bash
npm install
npm run dev
# Or preview production bundle:
npm run build
python3 -m http.server 8124 --directory dist
```
Navigate to `http://localhost:8124`.
