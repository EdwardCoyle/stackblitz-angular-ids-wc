import { TestBed } from '@angular/core/testing';
import { PerformanceComponent } from './performance.component';
describe('PerformanceComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PerformanceComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(PerformanceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=performance.component.spec.js.map