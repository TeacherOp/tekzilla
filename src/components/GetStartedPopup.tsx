"use client"

import { buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Calendar, Check, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

// Storage key for popup preference
const STORAGE_KEY = "getStartedPopupClosed"
const EXPIRY_DAYS = 3

// Check if the stored preference has expired
function hasPreferenceExpired(): boolean {
  if (typeof window === "undefined") return true

  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return true

  try {
    const data = JSON.parse(stored)
    const expiryTime = data.timestamp + EXPIRY_DAYS * 24 * 60 * 60 * 1000
    return Date.now() > expiryTime
  } catch {
    return true
  }
}

// Get the "don't show again" preference
function getDontShowAgain(): boolean {
  if (typeof window === "undefined") return false

  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return false

  try {
    const data = JSON.parse(stored)
    return data.dontShowAgain === true && !hasPreferenceExpired()
  } catch {
    return false
  }
}

// Save the popup preference
function savePopupPreference(dontShowAgain: boolean) {
  if (typeof window === "undefined") return

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      timestamp: Date.now(),
      dontShowAgain,
    })
  )
}

export default function GetStartedPopup() {
  const [open, setOpen] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  useEffect(() => {
    // Check if user has selected "don't show again" and it hasn't expired
    if (getDontShowAgain()) {
      return
    }

    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen && dontShowAgain) {
      savePopupPreference(true)
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setDontShowAgain(checked)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="max-w-[95vw] sm:max-w-lg w-full overflow-hidden p-0"
        onClose={() => handleOpenChange(false)}
      >
        {/* Header with gradient background */}
        <div className="bg-gradient-to-br from-primary via-primary to-primary/80 p-4 sm:p-6 text-center">

          <div className="flex justify-center mb-2 sm:mb-3">
            <div className="bg-white/20 rounded-full p-2 sm:p-3">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Get Started with Odoo ERP Today
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-white/90 pt-2">
            Ready to scale your business with the best Odoo Gold Partner in Mumbai?
          </DialogDescription>
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-center">
            <div className="bg-muted/50 rounded-lg p-2.5 sm:p-3">
              <div className="bg-primary/10 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <p className="text-[10px] sm:text-xs font-medium text-foreground">Free Consultation</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-2.5 sm:p-3">
              <div className="bg-primary/10 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <p className="text-[10px] sm:text-xs font-medium text-foreground">Certified Experts</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-2.5 sm:p-3">
              <div className="bg-primary/10 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <p className="text-[10px] sm:text-xs font-medium text-foreground">Quick Response</p>
            </div>
          </div>

          {/* Contact info */}
          <div className="bg-muted/30 rounded-lg p-3 sm:p-4 space-y-1.5 sm:space-y-2">
            <p className="text-center text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">
              Call us or book a consultation with our certified Odoo experts
            </p>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
              <a href="tel:+918233083333" className="font-semibold hover:text-primary transition-colors">
                +91-8233083333
              </a>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
              <a href="mailto:sales@teckzilla.net" className="font-semibold hover:text-primary transition-colors break-all">
                sales@teckzilla.net
              </a>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
              <a href="mailto:info@teckzilla.net" className="font-semibold hover:text-primary transition-colors break-all">
                info@teckzilla.net
              </a>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
              <a href="mailto:girish.joshi@teckzilla.net" className="font-semibold hover:text-primary transition-colors break-all">
                girish.joshi@teckzilla.net
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact-us"
            onClick={() => handleOpenChange(false)}
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full text-center py-4 sm:py-6 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all"
            )}
          >
            Get Your Free Consultation
          </Link>

          {/* Maybe later link */}
          <div className="text-center">
            <button
              onClick={() => handleOpenChange(false)}
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              I&apos;ll decide later
            </button>
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => handleCheckboxChange(e.target.checked)}
                className="peer h-4 w-4 sm:h-5 sm:w-5 rounded border-border accent-primary appearance-none cursor-pointer checked:bg-primary checked:border-primary transition-colors"
              />
              <Check className="absolute left-0.5 top-0.5 h-3 w-3 sm:h-4 sm:w-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Don&apos;t show this message again
            </span>
          </label>
        </div>
      </DialogContent>
    </Dialog>
  )
}
