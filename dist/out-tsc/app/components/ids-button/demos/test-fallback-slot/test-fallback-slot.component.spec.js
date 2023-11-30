import { TestBed } from '@angular/core/testing';
import { TestFallbackSlotComponent } from './test-fallback-slot.component';
describe('TestFallbackSlotComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestFallbackSlotComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(TestFallbackSlotComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=test-fallback-slot.component.spec.js.map