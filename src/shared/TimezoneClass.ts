import { TimezoneTypes } from "@/types/TimezoneType";

export class TimezoneClass {
  readonly abbreviation: string;
  readonly client_ip: string;
  readonly datetime: string;
  readonly day_of_week: number;
  readonly day_of_year: number;
  readonly dst: boolean;
  readonly dst_from: [null, string];
  readonly dst_offset: number;
  readonly dst_until: [null, string];
  readonly raw_offset: number;
  readonly timezone: string;
  readonly unixtime: number;
  readonly utc_datetime: string;
  readonly utc_offset: string;
  readonly week_number: number;

  constructor(timezone: TimezoneTypes) {
    this.abbreviation = timezone.abbreviation;
    this.client_ip = timezone.client_ip;
    this.datetime = timezone.datetime;
    this.day_of_week = timezone.day_of_week;
    this.day_of_year = timezone.day_of_year;
    this.dst = timezone.dst;
    this.dst_from = timezone.dst_from;
    this.dst_offset = timezone.dst_offset;
    this.dst_until = timezone.dst_until;
    this.raw_offset = timezone.raw_offset;
    this.timezone = timezone.timezone;
    this.unixtime = timezone.unixtime;
    this.utc_datetime = timezone.utc_datetime;
    this.utc_offset = timezone.utc_offset;
    this.week_number = timezone.week_number;
  }
}
