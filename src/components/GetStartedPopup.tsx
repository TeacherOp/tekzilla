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

export default function GetStartedPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds on every page load
    const timer = setTimeout(() => {
      setOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-[95vw] sm:max-w-lg w-full overflow-hidden p-0"
        onClose={() => setOpen(false)}
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
            Scale your business with a leading Odoo Gold Partner in India and a Silver Partner in the UAE
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
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
              <a href="tel:+971527633072" className="font-semibold hover:text-primary transition-colors">
                +971 52 763 3072
              </a>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
              <a href="tel:+919833765812" className="font-semibold hover:text-primary transition-colors">
                +91-9833765812
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
            onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              I&apos;ll decide later
            </button>
          </div>


        </div>
      </DialogContent>
    </Dialog>
  )
}
