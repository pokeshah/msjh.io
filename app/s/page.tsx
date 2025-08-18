'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  const schedules: { regular: ScheduleItem[] } = {
    regular: [
      { label: "Period 1", startHour: 8, startMinute: 30, endHour: 9, endMinute: 22 },
      { label: "Period 2", startHour: 9, startMinute: 28, endHour: 10, endMinute: 20 },
      { label: "Break", startHour: 10, startMinute: 20, endHour: 10, endMinute: 25 },
      { label: "Read", startHour: 10, startMinute: 31, endHour: 10, endMinute: 50 },
      { label: "Period 3", startHour: 10, startMinute: 50, endHour: 11, endMinute: 42 },
      { label: "Period 4", startHour: 11, startMinute: 48, endHour: 12, endMinute: 40 },
      { label: "Lunch", startHour: 12, startMinute: 40, endHour: 13, endMinute: 15 },
      { label: "Period 5", startHour: 13, startMinute: 21, endHour: 14, endMinute: 13 },
      { label: "Period 6", startHour: 14, startMinute: 19, endHour: 15, endMinute: 11 }
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

    const newCountdowns = schedules.regular.map(period => {
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
  }, []);

  return (
      <div className="min-h-screen bg-gray-100 p-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
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
