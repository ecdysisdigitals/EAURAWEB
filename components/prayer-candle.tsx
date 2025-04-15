"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface PrayerCandleProps {
  className?: string
}

export default function PrayerCandle({ className }: PrayerCandleProps) {
  const [isLit, setIsLit] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [prayer, setPrayer] = useState("")
  const [prayerCount, setPrayerCount] = useState(0)

  const handleLightCandle = () => {
    if (!isLit) {
      setShowDialog(true)
    }
  }

  const handleSubmitPrayer = () => {
    if (prayer.trim()) {
      setIsLit(true)
      setPrayerCount((prev) => prev + 1)
      setPrayer("")
      setShowDialog(false)
    }
  }

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <div
        className={cn(
          "relative w-32 h-48 cursor-pointer transition-all duration-500",
          isLit ? "opacity-100" : "opacity-80 hover:opacity-100",
        )}
        onClick={handleLightCandle}
      >
        {/* Candle base */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-40 bg-gradient-to-t from-[#f5e7c1] to-[#f8f0d7] rounded-md shadow-md">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Candle wick */}
        <div className="absolute bottom-[160px] left-1/2 -translate-x-1/2 w-1 h-6 bg-[#333] rounded-full"></div>

        {/* Candle flame */}
        <AnimatePresence>
          {isLit && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute bottom-[166px] left-1/2 -translate-x-1/2"
            >
              <div className="relative">
                <div className="absolute w-8 h-12 bg-gradient-to-t from-orange-500 via-yellow-300 to-white rounded-full blur-sm flame"></div>
                <div className="absolute w-4 h-10 bg-gradient-to-t from-yellow-400 via-yellow-200 to-white rounded-full left-1/2 -translate-x-1/2 flame"></div>
                <Flame className="relative w-8 h-8 text-yellow-300 flame" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          {isLit ? "Ang iyong kandila ay nagsisindi" : "Mag-click upang magsindi ng kandila"}
        </p>
        {prayerCount > 0 && (
          <p className="text-xs text-accent mt-1">
            {prayerCount} {prayerCount === 1 ? "panalangin" : "mga panalangin"} ang naisindi
          </p>
        )}
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Isulat ang Iyong Panalangin</DialogTitle>
            <DialogDescription>
              Isulat ang iyong panalangin o intensyon. Ito ay mananatiling pribado at hindi makikita ng iba.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Textarea
              placeholder="Isulat ang iyong panalangin dito..."
              value={prayer}
              onChange={(e) => setPrayer(e.target.value)}
              className="min-h-[120px]"
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowDialog(false)}>
                Kanselahin
              </Button>
              <Button onClick={handleSubmitPrayer}>Isindi ang Kandila</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
