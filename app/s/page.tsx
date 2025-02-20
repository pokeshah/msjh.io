'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from 'react';

interface ScheduleItem {
  label: string;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

interface CountdownItem extends ScheduleItem {
  startCountdown: string;
  endCountdown: string;
  isActive: boolean;
  hasEnded: boolean;
}

const ScheduleTimer = () => {
  const [currentTab, setCurrentTab] = useState<"regular" | "thursday" | "minimum">("regular");

  const schedules: Record<"regular" | "thursday" | "minimum", ScheduleItem[]> = {
    regular: [
      { label: "Period 1", startHour: 8, startMinute: 30, endHour: 9, endMinute: 23 },
      { label: "Period 2", startHour: 9, startMinute: 29, endHour: 10, endMinute: 22 },
      { label: "Reading", startHour: 10, startMinute: 33, endHour: 10, endMinute: 54 },
      { label: "Period 3", startHour: 10, startMinute: 54, endHour: 11, endMinute: 47 },
      { label: "Period 4", startHour: 11, startMinute: 53, endHour: 12, endMinute: 46 },
      { label: "Period 5", startHour: 13, startMinute: 27, endHour: 14, endMinute: 20 },
      { label: "Period 6", startHour: 14, startMinute: 26, endHour: 15, endMinute: 19 }
    ],
    thursday: [
      { label: "Period 1", startHour: 8, startMinute: 30, endHour: 9, endMinute: 18 },
      { label: "Period 2", startHour: 9, startMinute: 24, endHour: 10, endMinute: 12 },
      { label: "Advisory", startHour: 10, startMinute: 23, endHour: 11, endMinute: 5 },
      { label: "Period 3", startHour: 11, startMinute: 11, endHour: 11, endMinute: 59 },
      { label: "Period 4", startHour: 12, startMinute: 5, endHour: 12, endMinute: 53 },
      { label: "Period 5", startHour: 13, startMinute: 33, endHour: 14, endMinute: 21 },
      { label: "Period 6", startHour: 14, startMinute: 27, endHour: 15, endMinute: 15 }
    ],
    minimum: [
      { label: "Period 1", startHour: 8, startMinute: 30, endHour: 9, endMinute: 9 },
      { label: "Period 2", startHour: 9, startMinute: 15, endHour: 9, endMinute: 54 },
      { label: "Period 3", startHour: 10, startMinute: 0, endHour: 10, endMinute: 39 },
      { label: "Period 4", startHour: 10, startMinute: 51, endHour: 11, endMinute: 30 },
      { label: "Period 5", startHour: 11, startMinute: 36, endHour: 12, endMinute: 15 },
      { label: "Period 6", startHour: 12, startMinute: 21, endHour: 13, endMinute: 0 }
    ]
  };

  const [countdowns, setCountdowns] = useState<CountdownItem[]>([]);

  const formatTime = (timeDifference: number): string => {
    if (timeDifference <= 0) return "";

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    let timeString = "";
    if (hours > 0) timeString += `${hours}h `;
    if (minutes > 0 || hours > 0) timeString += `${minutes}m `;
    timeString += `${seconds}s`;

    return timeString.trim();
  };

  const calculateCountdowns = () => {
    const currentTime = new Date();

    const newCountdowns = schedules[currentTab].map(period => {
      const startTime = new Date();
      startTime.setHours(period.startHour, period.startMinute, 0, 0);

      const endTime = new Date();
      endTime.setHours(period.endHour, period.endMinute, 0, 0);

      const startDiff = startTime.getTime() - currentTime.getTime();
      const endDiff = endTime.getTime() - currentTime.getTime();

      return {
        ...period,
        startCountdown: formatTime(startDiff),
        endCountdown: formatTime(endDiff),
        isActive: currentTime >= startTime && currentTime <= endTime,
        hasEnded: currentTime > endTime
      };
    });

    setCountdowns(newCountdowns);
  };

  useEffect(() => {
    calculateCountdowns();
    const interval = setInterval(calculateCountdowns, 900);
    return () => clearInterval(interval);
  }, [currentTab]);

  const handleTabChange = (value: string) => {
    if (value === "regular" || value === "thursday" || value === "minimum") {
      setCurrentTab(value);
    }
  };

  return (
      <div className="min-h-screen bg-gray-100 p-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <Tabs
                defaultValue={currentTab}
                className="w-full"
                onValueChange={handleTabChange}
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="regular">M, T, W, F</TabsTrigger>
                <TabsTrigger value="thursday">Thursday</TabsTrigger>
                <TabsTrigger value="minimum">Minimum</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              {countdowns.map((period, index) => (
                  <Card
                      key={index}
                      className={period.isActive ? 'border-primary shadow-lg' : period.hasEnded ? 'opacity-50' : ''}
                  >
                    <CardHeader className="py-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-medium">
                          {period.label}
                        </CardTitle>
                        {period.isActive && (
                            <Badge>Current Period</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      {!period.hasEnded && (
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">Starts In</p>
                              {period.startCountdown ? <p className="text-lg font-mono">{period.startCountdown}</p> : <p className="text-lg font-mono">&mdash;&mdash;&mdash;&mdash;</p>}
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">Ends In</p>
                              <p className="text-lg font-mono">{period.endCountdown}</p>
                            </div>
                          </div>
                      )}
                    </CardContent>
                  </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
  );
};

export default ScheduleTimer;
